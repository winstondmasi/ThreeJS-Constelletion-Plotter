// Star model
const mongoose = require('mongoose');

const starSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rightAscension: { type: Number, required: true },
  declination: { type: Number, required: true },
  magnitude: { type: Number, required: true },
  // Other star properties...
});

module.exports = mongoose.model('Star', starSchema);
