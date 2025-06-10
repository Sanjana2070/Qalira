const asyncHandler = require('express-async-handler');
const User = require('../models/User');

// @desc    Get current user profile
// @route   GET /api/users/profile
const getProfile = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { getProfile };
