var express = require('express');
var router = express.Router();
var passport = require('passport');
const usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.index);

//helper func for protecting pages
router.get('/private', isLoggedIn, usersCtrl.privateView);

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/dreamerAppCallback', passport.authenticate(
  'google',
  {
    successRedirect : '/dreams',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
