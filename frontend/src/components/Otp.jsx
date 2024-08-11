import React from 'react'
import axios from 'axios';
import{useState} from 'react'
const Otp = () => {
    const [otp, setOtp] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const otpSession = window.localStorage.getItem('otpSession');

        try {
            const response = await axios.post('/api/verify-otp', { otp, otpSession });
            if (response.data.success) {
                window.location.href = '/welcome';
            } else {
                alert("Invalid OTP. Please try again.");
            }
        } catch (error) {
            console.error("Error verifying OTP", error);
            alert("Failed to verify OTP. Please try again.");
        }
    };
  return (
    <div>
    

        <form onSubmit={handleSubmit}>
            <label>Enter OTP:</label>
            <input 
                type="text" 
                value={otp} 
                onChange={(e) => setOtp(e.target.value)} 
                required 
            />
            <button type="submit">Submit</button>
        </form>
        </div>
  )}



export default Otp