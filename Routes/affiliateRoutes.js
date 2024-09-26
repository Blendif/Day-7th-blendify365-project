const express = require('express');
const router = express.Router();
const { getAffiliates, createAffiliate } = require('../controllers/affiliateController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getAffiliates);
router.post('/', authMiddleware, createAffiliate);

module.exports = router;
