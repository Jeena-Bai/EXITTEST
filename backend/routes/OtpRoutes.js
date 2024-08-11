const express = require('express');

const app=new express()
const cors=require('cors')
const { sendOtp, verifyOtp } = require('../controllers/otpController');
const router = express.Router();
app.use(express.json());  
app.use(cors()); 
// POST /api/send-otp - Send OTP to user's email
router.post('/send-otp', sendOtp);

// POST /api/verify-otp - Verify the entered OTP
router.post('/verify-otp', verifyOtp);

module.exports = router;

