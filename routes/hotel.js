const express = require("express");
const router = express.Router();

const hotels = [
  {
    id: 1,
    name: "Hotel 1",
    price: 100,
    city: "Paris",
    country: "France",
    rating: 4.6,
    stars: 4,
  },
  {
    id: 2,
    name: "Hotel 2",
    price: 200,
    city: "London",
    country: "UK",
    rating: 4.2,
    stars: 5,
  },
];

router.get("/", (req, res) => {
  res.send(hotels);
});

router.get("/:id", (req, res) => {
  const hotel = hotels.find(
    (hotel) => hotel.id === parseInt(req.params.id, 10)
  );
  res.send(hotel);
});

router.post("/", (req, res) => {
  const hotel = req.body;
  hotel.id = hotels.length + 1;
  hotels.push(hotel);
  res.send(hotel);
});

module.exports = router;
