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
router.get("/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const result = await User.findOne({ email: email });
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

// insert or upsert user information
router.put("/", async (req, res) => {
  try {
    const user = req.body;
    const filter = { email: user.email };
    const options = { upsert: true };
    const updateDoc = { $set: user };
    const result = await User.findOneAndUpdate(filter, updateDoc, options);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json("Failed to update user");
  }
});

module.exports = router;
