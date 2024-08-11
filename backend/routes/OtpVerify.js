const express=require('express')
const app=new express()
const router=express.Router()
const mongoose=require('mongoose')
const OTP=require('../models/OtpModel')
app.use(express.json())
router.post('http://localhost/3000/api/verify-otp', async (req, res) => {
    const { otp, otpSession } = req.body;

    try {
        const savedOtp = await OTP.findOne({ otpSession });

        if (savedOtp && savedOtp.otp === otp) {
            // OTP matched
            res.json({ success: true });
        } else {
            // OTP did not match
            res.json({ success: false });
        }
    } catch (error) {
        console.error("Error verifying OTP", error);
        res.status(500).json({ success: false, error: 'Failed to verify OTP' });
    }
})
module.exports=router