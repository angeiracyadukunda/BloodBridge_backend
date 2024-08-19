const express = require('express');
const { createRequest, getRequests, updateRequest } = require('../controllers/requestController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createRequest);
router.get('/', authMiddleware, getRequests);
router.put('/:id', authMiddleware, updateRequest);

module.exports = router;
