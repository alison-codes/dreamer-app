const Dream = require('../models/dream');

module.exports = {
    new: newDream,
    index, 
    create,
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
    res.render('dreams/', {
        user: req.user,
        title: 'Welcome to Reverie',
        name: firstName,
    });
}

function create(req, res) {
    var dream = new Dream(req.body);
    dream.save(function(err) {
      if (err) return res.render('/');
      console.log(dream);
      res.redirect('/dreams');
    });
}