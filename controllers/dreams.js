const Dream = require('../models/dream');

module.exports = {
    new: newDream,
    index
};

function newDream(req, res) {
    res.render('dreams/new', {
        user: req.user,
        title: 'Welcome to Reverie',
    });
}

function index(req, res) {
   
}
  