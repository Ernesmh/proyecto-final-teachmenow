const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User'},
  genericLevel: {type:Number, enum: ['1','2', '3','4','5']},
  punctualityLevel: {type:Number, enum: ['1','2', '3','4','5']},
  skillsLevel: {type:Number, enum: ['1','2', '3','4','5']},
  comment: {type:Number, enum: ['1','2', '3','4','5']},
});

const Rating = mongoose.model("Rating", ratingSchema);
module.exports = Rating;
