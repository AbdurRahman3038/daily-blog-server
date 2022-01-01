const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Blog } = require("../models/blogs");

// get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    if (!blogs.length) {
      res.json("Empty! Please insert a new blog");
    } else {
      res.json(blogs);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// get a blog by id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: mongoose.Types.ObjectId(id) };
    const result = await Blog.findOne(query);
    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// post a blog
router.post("/", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    const result = await blog.save();
    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// put a blog
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const filter = { _id: mongoose.Types.ObjectId(id) };
    const updateBlog = { $set: req.body };
    const result = await Blog.updateOne(filter, updateBlog);
    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// delete a blog by id
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Blog.findByIdAndDelete(id);
    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
