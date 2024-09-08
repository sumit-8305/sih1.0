const mongoose = require('mongoose');

const OPDRequestSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  hospital: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved'],
    default: 'pending',
  },
});

const OPDRequest = mongoose.model('OPDRequest', OPDRequestSchema);

module.exports = OPDRequest;
