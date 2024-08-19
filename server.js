const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/users'); // Ensure this path is correct

dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Use the user routes
app.use('/api/users', require('./routes/users'));

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('\x1b[32m%s\x1b[0m', 'MongoDB connected');
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', 'MongoDB connection error:', error);
    process.exit(1);
  }
};

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('\x1b[33m%s\x1b[0m', `Server running on port ${PORT}`);
});
