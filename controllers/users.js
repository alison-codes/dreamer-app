const User = require('../models/user');

module.exports = {
    index,
    show: showUser
};

function index(req, res) {
    res.redirect('/auth/google');
}

function showUser(req, res, next) {
    res.render('users/show', {
        user: req.user
    });
}