const { check, validationResult } = require('express-validator');

module.exports = [
  check('names').notEmpty().withMessage('Names are required'),
  check('bloodType').notEmpty().withMessage('Blood type is required'),
  // Add more validation checks as needed
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
