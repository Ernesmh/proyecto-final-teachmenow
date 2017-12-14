const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
    student: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    teacher: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    date: Date,
    status: {type: String, enum: ['done', 'undone']}
});

const Meeting= mongoose.model("Meeting", meetingSchema);
module.exports = Meeting;
