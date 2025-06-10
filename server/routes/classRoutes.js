const express = require('express');
const protect = require('../middleware/authMiddleware');
const { createClass, getClasses } = require('../controllers/classController');
const router = express.Router();

router.route('/')
  .get(getClasses)
  .post(protect, createClass);

module.exports = router;
