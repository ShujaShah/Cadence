const mongoose = require("mongoose");
const systemUsersSchema = new mongoose.Schema({
  emp_id: {
    type: Integer,
  },
  questionResponseText: {
    type: String,
  },
  email: {
    type: String,
    unique: true
  },
  
});
module.exports = mongoose.model("systemUsers", systemUsersSchema);
