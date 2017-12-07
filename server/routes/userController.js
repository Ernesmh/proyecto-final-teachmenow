const express = require('express');
const userController = express.Router();
const User = require("../models/User");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require("multer");
const upload = multer({ dest: './public/uploads/'});
const ensureLogin = require("connect-ensure-login");

userController.get('/', ensureLogin.ensureLoggedIn ('/login'), (req, res, next) => {
  User.find({})
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
  User.findById (id)
  .then( user => {res.json(user);})
  .catch(err => { res.status(500).json(err);});
});

userController.post('/:id/edit', ensureLogin.ensureLoggedIn ('/login'), upload.single('avatar'),(req, res, next) => {
  let id  = req.params.id;

    const updates = {
    username: req.body.username,
    password: req.body.password,
    role:req.body.role,
    email: req.body.email,
    position: {latitude: req.body.latitude, longitude: req.body.longitude},
    phone: req.body.phone,
    avatar: req.file.filename,
  };

  User.findByIdAndUpdate(id, updates, {new: true})
       .then(o => res.json(o))
       .catch(e => res.json(e));
});

module.exports = userController;
