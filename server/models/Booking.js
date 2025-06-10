const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
    date: { type: Date, default: Date.now },
    status: { type: String, default: 'booked' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);
