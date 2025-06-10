const asyncHandler = require('express-async-handler');
const Class = require('../models/Class');

const createClass = asyncHandler(async (req, res) => {
  const cls = await Class.create(req.body);
  res.status(201).json(cls);
});

const getClasses = asyncHandler(async (req, res) => {
  const classes = await Class.find().populate('studio');
  res.json(classes);
});

module.exports = { createClass, getClasses };
