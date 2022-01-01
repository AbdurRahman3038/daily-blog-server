const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    require: true,
  },
  ratings: {
    type: Number,
    require: true,
  },
  time: {
    type: Date,
    default: Date.now(),
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review };
