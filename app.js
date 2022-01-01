const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const port = process.env.PORT || 5050;
const blogRoute = require("./routes/blogRoute");

const app = express();
dotenv.config();

// connect mongoose
const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_URL);
    console.log("Connected to database successfully");
  } catch (err) {
    console.log(err.message);
  }
};
connect();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/blogs", blogRoute);

app.get("/", (req, res) => {
  res.json("hello");
});

// listen

app.listen(port, () => {
  console.log("listening on port " + port);
});
