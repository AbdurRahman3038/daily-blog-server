const express = require("express");
const router = express.Router();
const { Comment } = require("../models/comments");

// get all comments by blogId
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const comments = await Comment.find({ blogId: id });
    res.json(comments);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// post a comment
router.post("/", async (req, res) => {
  try {
    const comment = new Comment(req.body);
    const result = await comment.save();
    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
