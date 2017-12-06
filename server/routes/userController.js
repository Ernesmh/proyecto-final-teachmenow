const express = require('express');
const userController = express.Router();
const User = require("../models/User");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require("multer");
const upload = multer({ dest: './public/uploads/'});
const ensureLogin = require("connect-ensure-login");

userController.get('/', ensureLogin.ensureLoggedIn ('/login'), (req, res, next) => {
  User.find({role: "teacher"})
  .populate('Subject')
  .then( teacherList => {res.json(teacherList);})
  .catch(err => { res.status(500).json(err);});
});

userController.get('/:id', ensureLogin.ensureLoggedIn ('/login'), (req, res, next) => {
  let id = req.params.id;
  User.findById(id)
  .then( user => {res.json(user);})
  .catch(err => { res.status(500).json(err);});
});

userController.get('/:id/edit', ensureLogin.ensureLoggedIn ('/login'), (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id)
  .then( user => {res.json(user);})
  .catch(err => { res.status(500).json(err);});
});

userController.post('/:id/edit', ensureLogin.ensureLoggedIn ('/login'), upload.single('avatar'),(req, res, next) => {
  let id  = req.params.id;
  const updates = {
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
    available: req.body.available,
    email: req.body.email,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    phone: req.body.phone,
    price_per_hour: req.body.price_per_hour,
    avatar: req.file.filename,
    level: req.body.level,
    subject: req.body.subject,
    rating: req.body.rating,
    meeting: req.body.meeting,
  };

  User.findByIdAndUpdate(id, updates, (err, user) => {
    if (err){ return next(err); }
    return res.redirect('/');
  });
});

module.exports = userController;
