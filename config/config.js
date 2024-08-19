module.exports = {
    port: process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
    mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/rwanda-bloodbridge',
  };
  