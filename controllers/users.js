const User = require('../models/user');

module.exports = {
    index,
    privateView
};

function index(req, res) {
    res.render('index', {
        user: req.user,
        title: 'Welcome to Reverie',
    });
}

function privateView(req, res) {
    res.send("You found something private.");
}
