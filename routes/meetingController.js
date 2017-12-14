const express = require('express');
const meetingController = express.Router();
const User = require("../models/User");
const Meeting = require("../models/Meeting");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ObjectId   = mongoose.Schema.Types.ObjectId;
const ensureLogin = require("connect-ensure-login");
const nodemailer = require('nodemailer');


meetingController.post('/new', ensureLogin.ensureLoggedIn('/login'), (req, res, next) => {
  console.log(req.body);
  console.log(req.user);
  const newMeeting = new Meeting({
    student: req.body.id,
    teacher: req.user._id,
    date: new Date(),
    status: 'undone',
  });
  newMeeting.save()
    .then(meeting => {
      User.findByIdAndUpdate(req.user._id, {$pull: {student_petitions: req.body.id}}, {new: true})
        .then(user => {
          const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
          user: `${process.env.ADMIN_MAIL}`,
          pass: `${process.env.ADMIN_PASS}`
          }
          });
          const text = `¡Enhorabuena, has concertado la cita que tenías pendiente para hoy!`;
          var mailOptions = {
          from: `${process.env.ADMIN_MAIL}`,
          to: req.user.email,
          subject: '¡Cita Cerrada!',
          text: text
          };
          transporter.sendMail(mailOptions, (err, info) => {
          return err ? console.log(err) : console.log(info);
          });

          res.status(200).json(meeting);
        });
    })
    .catch(err => res.status(500).json({ message : 'Something went wrong'}));
});


meetingController.get('/:id', ensureLogin.ensureLoggedIn('/login'), (req, res, next) => {
  console.log("PENE");
  console.log(req.params.id);

  Meeting.find({"student": req.params.id, "status": "undone" })
  .populate("teacher")
  .then( meetingList => {res.json(meetingList);console.log("habemus lista" + meetingList);})
  .catch(err => { res.status(500).json(err);});
});

// meetingController.delete('/', )

module.exports = meetingController;
































module.exports = meetingController;
