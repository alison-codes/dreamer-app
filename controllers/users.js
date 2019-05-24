const User = require('../models/user');

module.exports = {
    index,
    privateView
    // show: showUser,
};

function index(req, res) {
    // res.redirect('/auth/google');
    res.render('index', {
        user: req.user,
        title: 'Welcome to Reverie',
    });
    // console.log("name is : " + req.query.name)
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
