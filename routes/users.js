const express = require('express');
const router = express.Router();
var Sentiment = require('sentiment');
var sentiment = new Sentiment();
// var currentSentiment = ('hello world')
// var result = sentiment.analyze(currentSentiment);
// console.dir(result); 

// router.get('/show', userCtrl.show);

module.exports = router;