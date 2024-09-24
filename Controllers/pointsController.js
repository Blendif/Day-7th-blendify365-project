const Points = require('../models/Points');

// @desc Get user points
// @route GET /api/points
// @access Private
const getPoints = async (req, res) => {
  try {
    const points = await Points.findOne({ userId: req.user._id });
    if (!points) {
      return res.status(404).json({ message: 'No points record found' });
    }
    res.status(200).json(points);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Update user points
// @route POST /api/points
// @access Private
const updatePoints = async (req, res) => {
  const { points } = req.body;

  if (!points) {
    return res.status(400).json({ message: 'Points are required' });
  }

  try {
    const userPoints = await Points.findOneAndUpdate(
      { userId: req.user._id },
      { $inc: { points: points } },
      { new: true, upsert: true }
    );
    res.status(200).json(userPoints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getPoints, updatePoints };
      
