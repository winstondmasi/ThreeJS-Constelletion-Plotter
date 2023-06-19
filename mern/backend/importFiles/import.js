// This script should be run once to populate the database.
const mongoose = require('mongoose');
const fs = require('fs');

require('dotenv').config();

// Define your Mongoose schema
const StarSchema = new mongoose.Schema({
  Dec: String,
  HR: String,
  K: String,
  RA: String,
  V: String,
  B: String,
  N: String,
  C: String,
  F: String,
});

// Create your Mongoose model
const Star = mongoose.model('Star', StarSchema);

// Read in the data from your JSON file
fs.readFile('../importFiles/data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  const stars = JSON.parse(data);

  // Filter out the stars that do not have an 'N' field
  const starsWithName = stars.filter(star => star.N);

  const uri = process.env.ATLAS_URI;

  // Connect to your MongoDB database
  mongoose.connect(uri , { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to MongoDB...');

      // Insert the filtered stars into your MongoDB database
      Star.insertMany(starsWithName)
        .then(() => console.log('Stars imported successfully...'))
        .catch(err => console.error('Error importing stars:', err))
        .finally(() => mongoose.connection.close());
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));
});
