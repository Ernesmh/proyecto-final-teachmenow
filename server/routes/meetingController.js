const express = require('express');
const meetingController = express.Router();
const User = require("../models/User");
const Meeting = require("../models/Meeting");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ObjectId   = mongoose.Schema.Types.ObjectId;
const ensureLogin = require("connect-ensure-login");
meetingController.post('/new', ensureLogin.ensureLoggedIn('/login'), (req, res, next) => {
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
          console.log(user);
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



module.exports = meetingController;
































module.exports = meetingController;
