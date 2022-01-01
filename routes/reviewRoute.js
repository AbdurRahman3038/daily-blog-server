const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Review } = require("../models/reviews");

// get all reviews
router.get("/", async (req, res) => {
  try {
    const result = await Review.find({});
    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// post a new review
router.post("/", async (req, res) => {
  try {
    const review = new Review(req.body);
    const result = await review.save();
    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// delete a review by _id
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Review.findByIdAndDelete(id);
    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
