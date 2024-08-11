const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: String,
    otp: String,
    otpSession: String,
    createdAt: { type: Date, expires: '10m', default: Date.now } // OTP expires in 10 minutes
});
const OTP=mongoose.model('OTP', otpSchema);

module.exports = OTP