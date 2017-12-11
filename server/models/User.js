const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  role: {type:String, enum:["teacher","student"]},
  subject: String,
  isAvailable: Boolean,
  price_per_hour: Number,
  rating: Array,
  level: {type: String, enum: ['Secundaria', 'Bachillerato', 'Universidad/FP', 'Postgrado']},
  email: String,
  position: {latitude: Number, longitude: Number},
  phone: Number,
  avatar: String,
  student_petitions: [{type:Schema.Types.ObjectId, ref:'User'}],
  description: String,
});

const User= mongoose.model("User", userSchema);
module.exports = User;
