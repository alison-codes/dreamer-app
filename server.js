var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var methodOverride = require('method-override');
var mongoStore = require('connect-mongo')(session);

require('dotenv').config();

require('./config/database');
require('./config/passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dreamsRouter = require('./routes/dreams');
var castRouter = require('./routes/cast');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'sausalitoqwerty',
  resave: false,
  saveUninitialized: true,
  store: new mongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { maxAge: 180 * 60 * 1000 },
}));




app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dreams', dreamsRouter);
app.use('/', castRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/', function (req, res) {
 
  // simple count for the session
  if (!req.session.count) {
      req.session.count = 0;
  }
  req.session.count += 1;

  // respond with the session object
  res.json(req.session);

});

module.exports = app;

