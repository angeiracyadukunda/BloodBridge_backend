const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');

exports.registerUser = async (req, res) => {
  try {
    const {
      names, bloodType, province, district, sector, cell, id,
      phoneNumber, preferredLanguage, KGL, age, password
    } = req.body;

    if (age < 18) {
      return res.status(400).json({ error: 'User must be at least 18 years old to register.' });
    }

    const user = new User({
      names, bloodType, province, district, sector, cell, id,
      phoneNumber, preferredLanguage, KGL, age, password
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { id, password } = req.body;
    const user = await User.findOne({ id });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, jwtSecret, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
