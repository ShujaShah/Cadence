"use strict";
const express = require("express");
const app = express();
const router = express.Router();
const {
  ensureAuthenticated,
  forwardAuthenticated,
} = require("../controller/authentication/index");

const { isAdmin } = require("../controller/authentication/adminAuthMiddleware");

const todos = require("../controller/todos/index");
const {
  getAllInterviews,
  // createTodo,
  // getTodo,
  // editTodo,
  // deleteTodo,
} = require("../controller/todos/index");

const { getLandingPage } = require("./web/index");

// Welcome Page
//router.get("/", forwardAuthenticated, (req, res) => res.render("landing"));
router.get("/", forwardAuthenticated, getLandingPage);
router.get("/dashboard", ensureAuthenticated, getAllInterviews);
router.get("/admin-dashboard", ensureAuthenticated, getAllInterviews);
router.get("/reviewer-dashboard", ensureAuthenticated, getAllInterviews);
// Privacy Policy Page
router.get("/privacy-policy", (req, res) => {
  res.render("privacy-policy");
});
// router.post("/dashboard", createTodo);
// router.route("/edit/:id").get(getTodo).post(editTodo);
// router.route("/remove/:id").get(deleteTodo);

//app.use(require("./api/v1/index"));

router.get("/admin-dashboard", isAdmin, (req, res) =>
  res.render("admin-dashboard")
);

router.get("/reviewer-dashboard", isAdmin, (req, res) =>
  res.render("reviewer-dashboard")
);

module.exports = router;
