const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  datetime: String,
  body: String,
});

module.exports = mongoose.model("media_posts", postSchema);
