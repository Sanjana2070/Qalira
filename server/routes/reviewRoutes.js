const express = require('express');
const protect = require('../middleware/authMiddleware');
const { createReview, getReviews } = require('../controllers/reviewController');
const router = express.Router({ mergeParams: true });

router.route('/')
  .get(getReviews)
  .post(protect, createReview);

module.exports = router;
