const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: String,
  price: Number,
  city: String,
  country: String,
  rating: Number,
  stars: Number,
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
