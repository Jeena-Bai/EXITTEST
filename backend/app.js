const express = require('express');
const cors = require('cors');

const otpRoutes = require('./routes/OtpRoutes');
const mongoose=require('mongoose')

require('./db/connect')
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB

// Use routes
app.use('/api', otpRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
