const asyncHandler = require('express-async-handler');
const razorpay = require('../config/razorpay');

const createOrder = asyncHandler(async (req, res) => {
  const options = {
    amount: req.body.amount * 100, // amount in smallest currency unit
    currency: 'INR'
  };
  const order = await razorpay.orders.create(options);
  res.json(order);
});

module.exports = { createOrder };
