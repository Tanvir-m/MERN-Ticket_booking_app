const router = require('express').Router();
const SeatsLayout = require('../models/SeatsLayout');

// to get seat price and seat range
router.get('/get', async (req, res) => {
  try {
    const seatLayout = await SeatsLayout.find();
    res.status(200).json(seatLayout);
  } catch (err) {
    res.status(500).json(err);
  }
});

// to set seat price and seat range
router.put('/', async (req, res) => {
  try {
    const setPrice = await SeatsLayout.findByIdAndUpdate(
      '61eaa83b385e4c8303bc1ccb',
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(setPrice);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
