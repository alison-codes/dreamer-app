var express = require('express');
var router = express.Router();
var dreamsCtrl = require('../controllers/dreams');


var Sentiment = require('sentiment');
var sentiment = new Sentiment();
// var currentSentiment = ('hello world')
// var result = sentiment.analyze(currentSentiment);
// console.dir(result); 

router.get('/', dreamsCtrl.index);
router.get('/new', dreamsCtrl.new);
router.get('/', dreamsCtrl.show);
router.post('/', dreamsCtrl.create);
router.delete('/:id', dreamsCtrl.delete);

module.exports = router;