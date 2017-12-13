const express = require('express');
const ratingController = express.Router();
const User = require("../models/User");
const Rating = require("../models/Rating");
const Meeting = require("../models/Meeting");
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

ratingController.post('/new/:id/:meetingId', (req, res, next) => {
  console.log('entro 1');
  console.log(req.params.meeting);
  const newRating = new Rating ({
    author: req.body.userId,
    genericLevel: parseInt(req.body.ratingObj.genericLevel),
    punctualityLevel: parseInt(req.body.ratingObj.punctualityLevel),
    skillsLevel: parseInt(req.body.ratingObj.skillsLevel),
    comment: req.body.ratingObj.comment
  });
  newRating.save()
  .then(rating => {
    console.log('entro 2');
    User.findByIdAndUpdate({"_id": req.params.id}, {$push: {rating: parseInt(req.body.ratingObj.genericLevel)}}, {new: true})
      .then(() => {
        Meeting.findByIdAndRemove({"_id": req.params.meetingId})
          .then(meeting => {
            console.log('entro 3');
            res.status(200).json(meeting);
          });
      });

  })

  .catch(err => res.status(500).json({ message : 'Something went wrong'}));
});


module.exports = ratingController;
