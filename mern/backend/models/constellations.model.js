// Constellation model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const constellationSchema = new Schema({
  N: { type: String, required: true },
  C: { type: String, required: true },
},{
    timestamps: true,
});

module.exports = mongoose.model('Constellation', constellationSchema);