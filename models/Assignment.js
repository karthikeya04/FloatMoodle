const mongoose = require("mongoose");
const {Schema} = mongoose;
// Creating a Schema for uploaded files


mongoose.connect("mongodb://localhost:27017/MoodleDB", {
  useNewUrlParser: true,

});

const assignmentSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: [true, "Uploaded file must have a name"],
  },
  nameofA: String,
  courseName: String,
  desc: String,
  deadline: Date,   // (day+time)
  submitted: Number, //number of submissions
  students: Number, //number of students
  flag: Boolean, // true if a grading's done
  //flag2: Boolean, 
});

// Creating a Model from that Schema
var Assignment = mongoose.model("Assignment", assignmentSchema);

// Exporting the Model to use it in app.js File.
module.exports = Assignment;