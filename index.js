const express = require('express');
const app = express();
const db = require('./db/db');
const seatsRoutes = require('./routes/seats');
const authRoutes = require('./routes/auth');
const seatLayoutRoutes = require('./routes/seatsLayout');
const cors = require('cors');

app.use(express.json());
app.use(cors());

// database
db;

// routes
app.use('/api/seats', seatsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', seatLayoutRoutes);

// deploy
if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));

  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Port

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Port is running on ${PORT}`);
});
