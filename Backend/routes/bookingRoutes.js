const express = require("express");
const Booking = require("../models/Booking");

const router = express.Router();

/* CREATE BOOKING */
router.post("/", async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.json({ message: "Booking successful" });
});

/* VIEW BOOKINGS */
router.get("/", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

module.exports = router;
