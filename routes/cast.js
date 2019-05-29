var express = require('express');
var router = express.Router();
var castCtrl = require('../controllers/cast');

router.post('/dreams/:id/cast', castCtrl.create);

module.exports = router;