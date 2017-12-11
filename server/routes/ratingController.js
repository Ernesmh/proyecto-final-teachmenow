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

ratingController.post('/new/:id', ensureLogin.ensureLoggedIn ('/login'), (req, res, next) => {
  let id = req.params.id;
  const newRating = new Rating ({
    author: req.user._id,
    genericLevel: req.body.genericLevel,
    punctualityLevel: req.body.punctualityLevel,
    skillsLevel: req.body.skillsLevel,
    comment: req.body.comment
  });

  newRating.save()
  .then(user => {
    User.findByIdAndUpdate({"_id": req.params.id}, {$push: {rating: req.body.genericLevel}}, {new: true})
      .then(user => {
        console.log(user);
        res.status(200).json(user);
      });
  })
  .catch(err => res.status(500).json({ message : 'Something went wrong'}));
});


module.exports = ratingController;
