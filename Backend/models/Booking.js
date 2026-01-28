const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  phone: String,
  serviceType: String,
  paymentType: String,
  bookingDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Booking", BookingSchema);
