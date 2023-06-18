// Star model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const starSchema = new Schema({
    HR: { type: Number, required: true },
    F: { type: String, required: true },
    B: { type: String, required: true },
    N: { type: String, required: true },
    RA: { type: String, required: true },
    Dec: { type: String, required: true },
    K: { type: String, required: true },
    V: { type: Number, required: true },
    constellation: { type: Schema.Types.ObjectId, ref: 'Constellation' }  // Reference to the constellation
}, {
    timestamps: true,
});

const Star = mongoose.model('Star', starSchema);

module.exports = Star;
