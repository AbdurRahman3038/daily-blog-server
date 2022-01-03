const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  blogImage: {
    type: String,
  },
  time: {
    type: Date,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = { Blog };
