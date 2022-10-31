const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
questions:{
    type: String,
},
});

module.exports = mongoose.model("test", TestSchema);
