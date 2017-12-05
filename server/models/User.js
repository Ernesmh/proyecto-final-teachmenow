const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  role: String,
  email: String,
  latitude: Number,
  longitude: Number,
  phone: Number,
  price_per_hour: Number,
  level: String,
  subject: [String],
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
