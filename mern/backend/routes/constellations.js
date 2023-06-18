// constellation.js
const router = require('express').Router();
let Constellation = require('../models/constellations.model');

// Get all constellations
router.get('/', async (req, res) => {
    try {
        const constellations = await Constellation.find();
        res.json(constellations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one constellation
router.get('/:HR', getConstellation, (req, res) => {
    res.json(res.constellation);
});

// Middleware function for get by HR
async function getConstellation(req, res, next) {
    let constellation;
    try {
        constellation = await Constellation.findById(req.params.HR);
        if (constellation == null) {
            return res.status(404).json({ message: 'Cannot find constellation' });
        }
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }
  
    res.constellation = constellation;
    next();
}

module.exports = router;