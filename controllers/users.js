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

//below only accessible if logged in
function privateView(req, res) {
    res.send("You found something private.");
}
