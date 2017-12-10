const express = require('express');
const ratingController = express.Router();
const User = require("../models/User");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require("multer");
const upload = multer({ dest: './public/uploads/'});
const ensureLogin = require("connect-ensure-login");

ratingController.get('/', ensureLogin.ensureLoggedIn ('/login'), (req, res, next) => {
  Rating.find({})
  .then( ratingList => {res.json(ratingList);})
  .catch(err => { res.status(500).json(err);});
});

ratingController.post('/new', ensureLogin.ensureLoggedIn ('/login'), (req, res, next) => {
  const newRating = new Rating ({
    author: req.user._id,
    teacher: '',
    genericLevel: req.body.genericLevel,
    punctualityLevel: req.body.punctualityLevel,
    skillsLevel: req.body.skillsLevel,
    comment: req.body.comment

  });

  newRating.save()
    .then(() => console.log("new rating created"))
    .catch(err => next(err));
});

module.exports = ratingController;
