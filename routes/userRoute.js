const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { User } = require("../models/user");

// get all users
router.get("/", async (req, res) => {
  try {
    const result = await User.find({});
    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// get a result
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: mongoose.Types.ObjectId(id) };
    const result = await User.findOne(query);
    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// post a user profile
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
