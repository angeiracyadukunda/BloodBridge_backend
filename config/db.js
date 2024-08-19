const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('\x1b[32m%s\x1b[0m', 'MongoDB connected'); // Green text
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', 'MongoDB connection error:', error); // Red text
    process.exit(1);
  }
};

connectDB();
