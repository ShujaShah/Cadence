const mongoose = require("mongoose");

const InterviewSchema = new mongoose.Schema({
  interviewer_id: {
    type: Integer,
  },
  interviewee_id: {
    type: Integer,
  },
  test_id: {
    type: Integer,
  },
  created_id: {
    date: {
      type: Date,
      default: Date.now,
    },
  },
  reviewer_id: {
    type: Integer,
  },
  schedule_at: {
    date: {
      type: Date,
      default: Date.now,
    },
  },
});

module.exports = mongoose.model("interview", InterviewSchema);
