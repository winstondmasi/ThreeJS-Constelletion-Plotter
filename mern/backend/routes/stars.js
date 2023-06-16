const router = require('express').Router();
let Star = require('../models/star.model');

router.route('/').get((req, res) => {
    Star.find()
        .then(stars => res.json(stars))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const rightAscension = req.body.rightAscension;
    const declination = req.body.declination;
    const magnitude = req.body.magnitude;

    const newStar = new Star({
        name,
        rightAscension,
        declination,
        magnitude,
    });

    newStar.save()
        .then(() => res.json('Star Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;