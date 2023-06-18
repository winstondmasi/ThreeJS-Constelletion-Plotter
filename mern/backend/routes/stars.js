// star.js
const router = require('express').Router();
let Star = require('../models/star.model');

// Get all stars
router.get('/', async (req, res) => {
    try {
        const stars = await Star.find();
        res.json(stars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one star
router.get('/:HR', getStar, (req, res) => {
    res.json(res.star);
});

// Middleware function for get by HR
async function getStar(req, res, next) {
    let star;
    try {
        star = await Star.findById(req.params.HR);
        if (star == null) {
            return res.status(404).json({ message: 'Cannot find star' });
        }
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }
  
    res.star = star;
    next();
}

module.exports = router;