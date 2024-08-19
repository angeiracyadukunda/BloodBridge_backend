const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

const userSchema = new Schema({
  names: { type: String, required: true },
  bloodType: { type: String, required: true },
  province: { type: String, required: true },
  district: { type: String, required: true },
  sector: { type: String, required: true },
  cell: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  preferredLanguage: { type: String, required: true },
  KGL: { type: String, required: true },
  age: { type: Number, required: true },
  donationTimes: { type: Number, default: 0 },
  role: { type: String, enum: ['donor', 'hospital', 'admin'], default: 'donor' }
});

userSchema.pre('save', function (next) {
  if (this.age < 18) {
    return next(new Error('User must be at least 18 years old to register.'));
  }
  next();
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
