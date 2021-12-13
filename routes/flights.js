var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET "/flights/new" - New Route
router.get('/new', flightsCtrl.new);

// POST "/flights" - Create Route
router.post('/', flightsCtrl.create);

// GET "/flights" - Index Route
router.get('/', flightsCtrl.index);

// GET "/movies/:id" - Show Route
router.get('/:id', flightsCtrl.show);



module.exports = router;
