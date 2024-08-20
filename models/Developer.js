
// models/Developer.js

const mongoose = require('mongoose');

const developerSchema = new mongoose.Schema({
  id: { type: String, required: true },
  logo: String,
  name:String,
  established:String,
  project:String, 
  shortDescription:String,
  longDescription:String,
  ongoingProjects:String,
  cityPresent: String,
});

module.exports = mongoose.model('Developer', developerSchema);

