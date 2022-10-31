const mongoose = require("mongoose");

const RefereeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  phoneNumber: {
    type: Integer,
  },
  emp_id: {
    type: Integer,
  },
  referred_count: {
    type: Integer,
  },
});

module.exports = mongoose.model("referee", RefereeSchema);
