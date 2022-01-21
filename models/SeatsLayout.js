const mongoose = require('mongoose');

const SeatsLayoutSchema = mongoose.Schema(
  {
    frontRowSeatsPrice: { type: Number, required: true },
    frontRowSeatsRange: { type: Number, required: true },
    secondRowSeatsPrice: { type: Number, required: true },
    secondRowSeatsRange: { type: Number, required: true },
    thirdRowSeatsPrice: { type: Number, required: true },
    thirdRowSeatsRange: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('SeatsLayout', SeatsLayoutSchema);
