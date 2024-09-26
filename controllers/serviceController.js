const ServiceRequest = require('../models/ServiceRequest');

// @desc    Get all service requests
// @route   GET /api/services
// @access  Public
const getServiceRequests = async (req, res) => {
  try {
    const services = await ServiceRequest.find({});
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create new service request
// @route   POST /api/services
// @access  Public
const createServiceRequest = async (req, res) => {
  const { serviceType, description, deadline } = req.body;

  if (!serviceType || !description || !deadline) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const service = new ServiceRequest({ serviceType, description, deadline });
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getServiceRequests, createServiceRequest };
