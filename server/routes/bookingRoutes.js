const express = require('express');
const protect = require('../middleware/authMiddleware');
const { createBooking, getBookings } = require('../controllers/bookingController');
const router = express.Router();

router.route('/')
  .get(protect, getBookings)
  .post(protect, createBooking);

module.exports = router;
