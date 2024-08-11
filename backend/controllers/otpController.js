const Otp = require('../models/OtpModel');
const nodemailer = require('nodemailer');
const express=require('express')
const app=new express()
const cors=require('cors')
require('dotenv').config();// Ensure this middleware is added to parse JSON
app.use(cors()); 
const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
};

const sendOtp = async (req, res) => {
  const { email } = req.body;
  const otp = generateOtp();

  try {
    const newOtp = new Otp({ email, otp });
    await newOtp.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "jeenabai2015@gmail.com",
        pass: process.env.App_Password,
      },
    });

    const mailOptions = {
      from: "jeenabai2015@gmail.com",
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'OTP sent' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending OTP' });
  }
};

const verifyOtp = async (req, res) => {
  const { otp } = req.body;
  const foundOtp = await Otp.findOne({ otp });

  if (!foundOtp) {
    return res.status(400).json({ success: false, message: 'Invalid OTP' });
  }

  res.status(200).json({ success: true, message: 'OTP verified' });
};

module.exports = { sendOtp, verifyOtp };
