// Import the necessary libraries
const express = require('express');
const router = express.Router();

// Import your Mongoose model
const Star = require('../models/star.model');  // Replace with the path to your Star model

// GET route to retrieve all stars
router.get('/', async (req, res) => {
  try {
    const stars = await Star.find();
    res.json(stars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route to retrieve a specific star by name
router.get('/:name', getStar, (req, res) => {
  res.json(res.star);
});

// Middleware function to get a star by name
async function getStar(req, res, next) {
  let star;
  try {
    star = await Star.findOne({ N: req.params.name });  // Assuming 'N' is the field for star name
    if (star == null) {
      return res.status(404).json({ message: 'Cannot find star' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.star = star;
  next();
}

// Export the router
module.exports = router;
