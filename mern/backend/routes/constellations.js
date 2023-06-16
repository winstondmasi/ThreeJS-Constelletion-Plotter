const router = require('express').Router();
let Constellation = require('../models/constellations.model');

router.route('/').get((req, res) => {
    Constellation.find()
        .then(const_name => res.json(const_name))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const constellation_name = req.body.constellation_name;

    const new_constellation = new Constellation({constellation_name});

    new_constellation.save()
    .then(() => res.json('Constellation added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;