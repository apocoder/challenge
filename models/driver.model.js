var mongoose = require('mongoose');

var Driver  = new mongoose.Schema({
	name:String,
    loc: {
    type: [Number],  // [<longitude>, <latitude>]
    index: '2d'      // create the geospatial index
    }
});

module.exports = mongoose.model('Driver',Driver);