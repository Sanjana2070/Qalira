const mongoose = require('mongoose');

const classSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    schedule: { type: String },
    studio: { type: mongoose.Schema.Types.ObjectId, ref: 'Studio', required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Class', classSchema);
