const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const bcrypt = require("bcryptjs");
const passport = require("passport");
const express = require("express");
const app = express();

app.use(passport.initialize());

// Load User model
const User = require("../models/entity/Credentials");

const googleClientId =
  "180692229496-et1kt037fjvhb3na1de8sgh9s99pu6ik.apps.googleusercontent.com";
const googleClientSecret = "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";

const facebookClientId = "463788468960471";
const facebookClientSecret = "fad78ecfba7ca4df7878b31c3111b401";

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      // Match user
      User.findOne({
        email: email,
      }).then((user) => {
        if (!user) {
          return done(null, false, { message: "That email is not registered" });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, {
              message: "Email or Password is incorrect",
            });
          }
        });
      });
    })
  );

  //Google oauth 2
  passport.use(
    new GoogleStrategy(
      {
        clientID: googleClientId,
        clientSecret: googleClientSecret,
        callbackURL: "/auth/google/callback",
        passReqToCallback: true,
      },
      async (request, accessToken, refreshToken, profile, done) => {
        console.log(profile);
        //return done(profile);
        const newUser = {
          "google.googleId": profile.id,
          "google.displayName": profile.displayName,
          "google.firstName": profile.name.givenName,
          "google.lastName": profile.familyName,
          "google.image": profile.photos[0].value,
        };
        try {
          let user = await User.findOne({ "google.googleId": profile.id });
          if (user) {
            done(null, user);
          } else {
            user = await User.create(newUser);
            done(null, user);
          }
        } catch (err) {
          console.error(err);
        }
      }
    )
  );

  // Facebook OAuth2.0
  passport.use(
    new FacebookStrategy(
      {
        clientID: facebookClientId,
        clientSecret: facebookClientSecret,
        callbackURL: "http://localhost:3000/auth/facebook/callback",
        profileFields: ["id", "displayName", "photos", "email"],
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOne({ facebook_id: profile.id }, function(err, user) {
          if(err) {
            console.log(err);  
          }
          
          if (user) {
            done(null, user); 
          } else { 
            user = new User({
              facebook_id: profile.id, 
              name: profile.displayName
            });
            user.save(function(err) { 
              if(err) {
                console.log(err);  
              } else {
                console.log("saving user ...");
                done(null, user);
              }
            });
          }
        });
      }
    ));

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
