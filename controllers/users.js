const User = require('../models/user');

module.exports = {
    index,
    privateView
    // show: showUser,
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

// function showUser(req, res, next) {
//     // res.render('users/show', {
//     //     user: req.user
//     // });
// }
