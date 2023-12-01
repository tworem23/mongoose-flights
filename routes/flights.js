var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

/* GET flights listing. */
router.get('/', flightsCtrl.index) 
/* POST create flight */
router.post('/', flightsCtrl.create)
/* GET new flights */
router.get('/new', flightsCtrl.new)
router.get('/:id', flightsCtrl.show)

module.exports = router;
