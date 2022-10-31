const mongoose = require("mongoose");
const questionBankSchema = new mongoose.Schema({
  questionText: {
    type: String,
  },
  questionResponseText: {
    type: String,
  },
  questionMedia: {
    type: String,
  },
  questionResponseMedia: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("questionBank", questionBankSchema);
