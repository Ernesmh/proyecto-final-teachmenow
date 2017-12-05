const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
  name: String,
  teacher: {type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
  level: String,
});

const Subject= mongoose.model("Subject", subjectSchema);

module.exports = Subject;
