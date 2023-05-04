const mongoose = require("mongoose");
const path = require("path");

// var XMLParser = require('react-xml-parser');
// var xml = new XMLParser().parseFromString(xmlText);    // Assume xmlText contains the example XML
// console.log(xml);
// console.log(xml.getElementsByTagName('Name'));

const PostSchema = new mongoose.Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Post", PostSchema);
