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
const cors = require('cors');
const dbURL = "mongodb://localhost/teachMeNow";
const app = express();


mongoose.connect(dbURL).then( () => {
  debug(`Connected to ${dbURL}`);
});

const whitelist = [
    'http://localhost:4200',
];
const corsOptions = {
    origin: function(origin, callback){
        const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};

app.use(cors(corsOptions));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

require('./passport')(app);


// app.use((req,res,next) => {
//   res.locals.title = "Teach me Now";
//   res.locals.user = req.user;
//   next();
// });

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authController);
app.use('/subject', subjectController);
app.use('/user', userController);
app.use('/rating', ratingController);
// app.use('/meeting', meetingController);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.status(400).json({"message": err.status});
});

module.exports = app;
