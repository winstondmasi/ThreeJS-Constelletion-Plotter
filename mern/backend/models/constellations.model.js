// Constellation model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const constellationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  stars: [{ type: Schema.Types.ObjectId, ref: 'Star' }],
  // Other constellation properties...
});

module.exports = mongoose.model('Constellation', constellationSchema);
