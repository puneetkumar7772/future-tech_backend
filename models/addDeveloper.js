const mongoose = require("mongoose");

const developerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  currentcompany: {
    type: String,
    required: true,
  },
  priviouscompany: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Developer = mongoose.model("developer", developerSchema);

module.exports = Developer;
