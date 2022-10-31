const mongoose = require("mongoose");

const IntervieweeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    address:{
        type: String,
    },
    alternateEmail:{
        type: email,
        unique:true,
    },
    phoneNumber:{
        type: Integer,
    },
    alternatePhoneNumber:{
        type: Integer,
    },
    referredBy:{
        type: String,
        unique: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    interviewee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
});
module.exports = mongoose.model("interviewee", IntervieweeSchema);
