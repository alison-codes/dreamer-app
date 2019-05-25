const Dream = require('../models/dream');

module.exports = {
    new: newDream,
    index, 
    create,
    show,
    delete: deleteDream,
};

function newDream(req, res) {
    res.render('dreams/new', {
        user: req.user,
        title: 'Welcome to Reverie',
    });
}

function index(req, res) { 
    var str = req.user.name
    var firstName = str.substr(0,str.indexOf(' '));

    Dream.find({user_id: req.user.id}, function(err, dreams) {
        res.render('dreams/', {
            user: req.user,
            title: 'Welcome to Reverie',
            name: firstName,
            dreams: dreams,
        });
    });
}

function create(req, res) {
    req.body.user_id = req.user.id;
    var dream = new Dream(req.body);
    var Sentiment = require('sentiment');
    var sentiment = new Sentiment();
    var currentSentiment = (dream.description)
    var result = sentiment.analyze(currentSentiment);
    dream.score = result.score;
    // console.log("dream:" + dream);
    dream.save(function(err) {
      if (err) return res.render('/');

      res.redirect('/dreams');
    });
}

function show(req, res) {
    res.render('dreams/analysis', {
    
    });
  }

function deleteDream(req, res) {
    Dream.findByIdAndDelete(req.params.id, function(err, deletedDream) {
        res.redirect('/dreams');
    });
}


