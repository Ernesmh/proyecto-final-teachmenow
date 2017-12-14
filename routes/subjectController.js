const express = require('express');
const subjectController = express.Router();
const Subject = require("../models/Subject");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ensureLogin = require("connect-ensure-login");


subjectController.get('/', ensureLogin.ensureLoggedIn ('/login'), (req, res, next) => {

  Subject.find({})
  .then( subjectList => {res.json(subjectList);})
  .catch(err => { res.status(500).json(err);});
});

subjectController.get('/:id', ensureLogin.ensureLoggedIn ('/login'), (req, res, next) => {
  let id = req.params.id;
  subject.findById(id)
  .then( subject => {res.json(subject);})
  .catch(err => { res.status(500).json(err);});
  });



module.exports= subjectController;
