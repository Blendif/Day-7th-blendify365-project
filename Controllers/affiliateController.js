const Affiliate = require('../models/Affiliate');

// @desc Get all affiliate links
// @route GET /api/affiliate
// @access Private
const getAffiliates = async (req, res) => {
  try {
    const affiliates = await Affiliate.find({ userId: req.user._id });
    res.status(200).json(affiliates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Create a new affiliate link
// @route POST /api/affiliate
// @access Private
const createAffiliate = async (req, res) => {
  const { affiliateLink } = req.body;

  if (!affiliateLink) {
    return res.status(400).json({ message: 'Affiliate link is required' });
  }

  try {
    const affiliate = new Affiliate({ userId: req.user._id, affiliateLink });
    await affiliate.save();
    res.status(201).json(affiliate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAffiliates, createAffiliate };
  
