const asyncHandler = require('express-async-handler');
const Studio = require('../models/Studio');

const createStudio = asyncHandler(async (req, res) => {
  const studio = await Studio.create(req.body);
  res.status(201).json(studio);
});

const getStudios = asyncHandler(async (req, res) => {
  const studios = await Studio.find();
  res.json(studios);
});

module.exports = { createStudio, getStudios };
