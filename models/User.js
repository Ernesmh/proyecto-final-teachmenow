const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  role: {type:String, enum:["teacher","student"]},
  // role: {teacher: { subject: String,
  //                   isAvailable: Boolean,
  //                   price_per_hour: Number,
  //                   rating: Number,
  //                   level: {type: String, enum: ['Secundaria', 'Bachillerato', 'Universidad/FP', 'Postgrado']}
  //                   },
  //       student: {}
  //
  // },

  email: String,
  position: {latitude: Number, longitude: Number},
  phone: Number,
  avatar: String,

});

const User= mongoose.model("User", userSchema);
module.exports = User;
