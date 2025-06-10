const express = require('express');
const protect = require('../middleware/authMiddleware');
const { createStudio, getStudios } = require('../controllers/studioController');
const router = express.Router();

router.route('/')
  .get(getStudios)
  .post(protect, createStudio);

module.exports = router;
