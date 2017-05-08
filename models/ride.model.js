var mongoose = require('mongoose');

var Ride  = new mongoose.Schema({
	limit:Number,
	distance:Number,
	longitude:String,
	latitude:String
});

module.exports = mongoose.model('Ride',Ride);