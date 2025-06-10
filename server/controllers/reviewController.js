const asyncHandler = require('express-async-handler');
const Review = require('../models/Review');

const createReview = asyncHandler(async (req, res) => {
  const review = await Review.create({ ...req.body, user: req.user._id });
  res.status(201).json(review);
});

const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({ class: req.params.classId }).populate('user');
  res.json(reviews);
});

module.exports = { createReview, getReviews };
