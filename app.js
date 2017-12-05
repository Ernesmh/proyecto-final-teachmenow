const dotenv = require('dotenv').load();
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const index = require('./routes/index');
const authController = require ('./routes/authController');
const meetingController = require ('./routes/meetingController');
const ratingController = require ('./routes/ratingController');
const userController = require ('./routes/userController');
const subjectController = require ('./routes/subjectController');

const dbURL = "mongodb://localhost/teachMeNow";
const app = express();

// const User = require('./models/User');
// const Meeting = require ('./models/Meeting')
// const Subject = require('./models/Subject');
// const Rating = require('./models/Rating');


mongoose.connect(dbURL).then( () => {
  debug(`Connected to ${dbURL}`);
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));

require('./passport')(app);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
// app.use('/auth', authController);
// app.use('/subject', subjectController);
// app.use('/user', userController);
// app.use('/rating', ratingController);
// app.use('/meeting', meetingController);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((req,res,next) => {
  res.locals.title = "Teach me Now";
  res.locals.user = req.user;
  next();
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

module.exports = app;
