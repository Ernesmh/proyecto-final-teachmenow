const express = require('express');
const userController = express.Router();
const User = require("../models/User");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ensureLogin = require("connect-ensure-login");
const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload   = multer({ storage });


userController.get('/', ensureLogin.ensureLoggedIn ('/login'), (req, res, next) => {
  User.find({})
  .populate('Subject')
  .then( teacherList => {res.json(teacherList);})
  .catch(err => { res.status(500).json(err);});
});

userController.get('/profile', ensureLogin.ensureLoggedIn ('/login'), (req, res, next) => {
  User.findById(req.user._id)
    .populate('student_petitions')
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json({ message: 'Something went wrong'}));
});

userController.get('/teacher/:subject', ensureLogin.ensureLoggedIn ('/auth/login'), (req, res, next) => {
  let subject = req.params.subject;
  User.find({role:"teacher", subject:subject})
  .populate('Subject')
  .then( teacherList => {res.json(teacherList);})
  .catch(err => { res.status(500).json(err);});
});

userController.post('/teacher/petition', ensureLogin.ensureLoggedIn('/login'), (req, res, next) => {
  User.findByIdAndUpdate(req.body.id, {$push: {student_petitions: req.user._id}}, {new: true})
    .then(teacher => res.status(200).json(teacher))
    .catch(err => req.status(500).json({ message: 'Something went wrong'}));
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

userController.post('/:id/edit', upload.single('file'), (req, res, next) => {
  console.log("ENTRO EN PHOTO");
  console.log(req.body);
  let id  = req.params.id;
  const {username, role, subject, price_per_hour, level, email, phone, description} = req.body;
  const avatar = `/uploads/${req.file.filename}`;

  console.log('me cago en la puta ya');
  console.log({username, role, subject, price_per_hour, level, email, phone, description, avatar});

  User.findByIdAndUpdate(id, {username, role, subject, price_per_hour, level, email, phone, description, avatar}, {new: true})
       .then(o => res.json(o))
       .catch(e => res.json(e));
});

module.exports = userController;
