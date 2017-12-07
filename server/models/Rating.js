const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User'},
  genericLevel: Number,
  punctualityLevel: Number,
  skillsLevel: Number,
  comment: String
});

const Rating = mongoose.model("Rating", ratingSchema);
module.exports = Rating;
