var express = require('express');
var router = express.Router();
var ride = require('../controllers/ride.controller');




router.post('/',ride.findNearby);

module.exports = router;
