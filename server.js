const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('\x1b[40m%s\x1b[0m', 'MongoDB connected'); 
  } catch (error) {
    console.error('\x1b[36m%s\x1b[0m', 'MongoDB connection error:', error); 
    process.exit(1);
  }
};

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('\x1b[34m%s\x1b[0m', `Server running on port ${PORT}`); 
});
