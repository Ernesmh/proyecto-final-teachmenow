const express = require('express');
const ratingController = express.Router();
const User = require("../models/User");
const Rating = require("../models/Rating");

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

ratingController.post('/new/:id', (req, res, next) => {
  const newRating = new Rating ({
    author: req.body.userId,
    genericLevel: parseInt(req.body.ratingObj.genericLevel),
    punctualityLevel: parseInt(req.body.ratingObj.punctualityLevel),
    skillsLevel: parseInt(req.body.ratingObj.skillsLevel),
    comment: req.body.ratingObj.comment
  });
  newRating.save()
  .then(rating => {
    User.findByIdAndUpdate({"_id": req.params.id}, {$push: {rating: parseInt(req.body.ratingObj.genericLevel)}}, {new: true})
      .then(user => {
        res.status(200).json(user);
      });
  })
  .catch(err => res.status(500).json({ message : 'Something went wrong'}));
});


module.exports = ratingController;
