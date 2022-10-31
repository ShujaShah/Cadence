const mongoose = require("mongoose");

const MediaRecordingsSchema = new mongoose.Schema({
questions:{
    type: String,
},
});

module.exports = mongoose.model("mediaRecordings", MediaRecordingsSchema);
