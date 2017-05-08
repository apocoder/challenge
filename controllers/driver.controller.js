var mongoose = require('mongoose')
var Driver = require('../models/driver.model');

var driverController = {};




driverController.list = function (req,res) {
	var drivers = [{
	    'name' : 'a taksisi',
	    'loc' : 
	        [23.600800037384033, 46.76758746952729]
	    
	},{
	    'name' : 'b taksisi',
	    'loc' : 
	        [45.2, 9.7]
	    
	},{
	    'name' : 'c taksisi',
	    'loc' : 
	        [50.1, 9.7]
	    
	},{
	    'name' : 'd taksisi',
	    'loc' : 
	        [50.2, 9.7]
	    
	}];

Driver.insertMany(drivers, 
	function (err, docs) {
	    if (err) {
	    } else {
	        console.info( docs.length);
				   Driver.find({}).exec(function(err,drivers) {
					if(err) console.log(err);
					res.json(drivers);
				})
	    }
	});
	
}


driverController.create = function(req,res) {
	console.log(req.body)
	var driverModel = new Driver(req.body);
	driverModel.save(function(err){
		if(err)console.log(err);
		res.send(200);
	});
}

driverController.find = function(req,res) {
	
	Driver.findById(req.params.id,function(err,driver) {
		if(err)console.log(err);
		res.json(driver);
	})
}



driverController.delete = function(req,res) {
	Driver.findById(req.params.id,function(err,driver) {
		if(!driver) { return res.send(404); }
	    driver.remove(function(err) {
	     if(err)console.log(err);
	      return res.send(204);
	    });
	})
}



module.exports = driverController;