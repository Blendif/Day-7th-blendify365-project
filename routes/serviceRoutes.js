const express = require('express');
const router = express.Router();
const { getServiceRequests, createServiceRequest } = require('../controllers/serviceController');

router.get('/', getServiceRequests);
router.post('/', createServiceRequest);

module.exports = router;
