const express = require('express');
const router = express.Router();
const User = require('../models/User');

// @route   POST /api/users/register
// @desc    Register a new user
// @access  Public
router.post('/register', async (req, res) => {
  try {
    const { names, bloodType, province, district, sector, cell, id, phoneNumber, preferredLanguage, kgl, age, timesOfDonating, availability } = req.body;

    // Check if user already exists
    let user = await User.findOne({ id });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    user = new User({
      names,
      bloodType,
      province,
      district,
      sector,
      cell,
      id,
      phoneNumber,
      preferredLanguage,
      kgl,
      age,
      timesOfDonating,
      availability
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/users
// @desc    Get all users
// @access  Public
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/users/:id
// @desc    Get a single user by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/users/:id
// @desc    Update user information
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const { names, bloodType, province, district, sector, cell, phoneNumber, preferredLanguage, kgl, age, timesOfDonating, availability } = req.body;

    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user fields
    user.names = names || user.names;
    user.bloodType = bloodType || user.bloodType;
    user.province = province || user.province;
    user.district = district || user.district;
    user.sector = sector || user.sector;
    user.cell = cell || user.cell;
    user.phoneNumber = phoneNumber || user.phoneNumber;
    user.preferredLanguage = preferredLanguage || user.preferredLanguage;
    user.kgl = kgl || user.kgl;
    user.age = age || user.age;
    user.timesOfDonating = timesOfDonating || user.timesOfDonating;
    user.availability = availability || user.availability;

    await user.save();
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/users/:id
// @desc    Delete a user by ID
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.remove();
    res.json({ message: 'User removed successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
