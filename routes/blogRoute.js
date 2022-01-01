const express = require("express");
const router = express.Router();
const { Blog } = require("../models/blogs");

router.get("/", async (req, res) => {
  res.json("hello world");
});

module.exports = router;
