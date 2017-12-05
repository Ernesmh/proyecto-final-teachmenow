const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  genericLevel: Number,
  punctualityLevel: Number,
  skillsLevel: Number,
  comment:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
});

const Rating = mongoose.model("Rating", ratingSchema);
module.exports = Rating;
