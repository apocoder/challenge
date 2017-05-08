var mongoose = require('mongoose')
var Driver = require('../models/driver.model');
var Ride = require('../models/ride.model');

var rideController = {};

rideController.findNearby = function(req, res, next) {

     var rideModel = new Ride(req.body);

    var limit = rideModel.limit|| 10;

    // get the max distance or set it to 8 kilometers
    var maxDistance = rideModel.distance || 8;

    // we need to convert the distance to radians
    // the raduis of Earth is approximately 6371 kilometers
    maxDistance /= 6371;

    // get coordinates [ <longitude> , <latitude> ]
    var coords = [];
    coords[0] = rideModel.longitude;
    coords[1] = rideModel.latitude;

    // find a location
    Driver.find({
      loc: {
        $near: coords,
        $maxDistance: maxDistance
      }
    }).limit(limit).exec(function(err, drivers) {
      if (err) {
        return res.json(500, err);
      }

      res.json(200, drivers);
    });
}

module.exports = rideController;