var express = require('express');
var router = express.Router();
var driver = require('../controllers/driver.controller');



router.get('/',driver.list);
router.post('/create',driver.create);
router.get('/:id', driver.find);
router.delete('/:id',driver.delete);

module.exports = router;
