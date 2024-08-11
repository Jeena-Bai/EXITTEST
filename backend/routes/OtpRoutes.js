const express = require('express');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');
const OTP = require('../models/OtpModel'); // Assuming you have an OTP model in Mongoose

const router = express.Router();
app.use(express.json())
router.post('http//localhost:3000/api/send-otp', async (req, res) => {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
    const otpSession = uuidv4(); // Unique identifier for the OTP session

    try {
        // Save OTP and session to the database
        const newOtp = new OTP({ otp, otpSession, email, createdAt: new Date() });
        await newOtp.save();

        // Send OTP to email using Nodemailer
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'your-email@gmail.com',
                pass: process.env.App_Password,
            },
        });

        let mailOptions = {
            from: 'jeenabai2015@gmail.com',
            to: email,
            subject: 'Your OTP Code',
            text: `Your OTP code is ${otp}`,
        };

        await transporter.sendMail(mailOptions);

        res.json({ success: true, otpSession });
    } catch (error) {
        console.error("Error sending OTP", error);
        res.status(500).json({ success: false, error: 'Failed to send OTP' });
    }
});

module.exports = router;
