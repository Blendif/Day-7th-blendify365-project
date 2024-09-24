const express = require('express');
const router = express.Router();
const { getPoints, updatePoints } = require('../controllers/pointsController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getPoints);
router.post('/', authMiddleware, updatePoints);

module.exports = router;
