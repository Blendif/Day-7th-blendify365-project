const mongoose = require('mongoose');

const serviceRequestSchema = new mongoose.Schema({
  serviceType: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ServiceRequest', serviceRequestSchema);
