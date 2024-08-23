const mongoose = require('mongoose');

const HospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  uniqueId: {
    type: String,
    required: true,
    unique: true,
    index: true // Adding index here
  }
  ,
  totalBeds: {
    type: Number,
    required: true,
    default: 0
  },
  availableBeds: {
    type: Number,
    required: true,
    default: 0
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  maintainers: [{
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  }]
});

module.exports = mongoose.model('Hospital', HospitalSchema);

