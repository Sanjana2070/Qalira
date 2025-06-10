const asyncHandler = require('express-async-handler');
const Booking = require('../models/Booking');

const createBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.create({ ...req.body, user: req.user._id });
  res.status(201).json(booking);
});

const getBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).populate('class');
  res.json(bookings);
});

module.exports = { createBooking, getBookings };
