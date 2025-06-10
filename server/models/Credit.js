const mongoose = require('mongoose');

const creditSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    balance: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Credit', creditSchema);
