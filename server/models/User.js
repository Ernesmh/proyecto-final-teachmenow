const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  role: {type:String, enum: ['student','teacher']},
  available: {type:String, enum: ['yes','no']},
  email: String,
  latitude: Number,
  longitude: Number,
  phone: Number,
  price_per_hour: Number,
  avatar: String,
  level: {
    type: Schema.Types.ObjectId,
    ref: 'Rating',
  },
  subject: [{
    type: Schema.Types.ObjectId,
    ref: 'Subject',
  }],
  rating:  {
    type: Schema.Types.ObjectId,
    ref: 'Rating',

  },
  meeting:  {
    type: Schema.Types.ObjectId,
    ref: 'Meeting',

  },
});

const User= mongoose.model("User", userSchema);

module.exports = User;
