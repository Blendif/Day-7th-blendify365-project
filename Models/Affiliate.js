const mongoose = require('mongoose');

const affiliateSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  affiliateLink: { type: String, required: true },
  commissionEarned: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Affiliate', affiliateSchema);
