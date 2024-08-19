const mongoose = require('mongoose');
const { Schema } = mongoose;

const requestSchema = new Schema({
  hospital: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bloodType: { type: String, required: true },
  quantity: { type: Number, required: true },
  urgency: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  status: { type: String, enum: ['pending', 'fulfilled', 'cancelled'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Request', requestSchema);
