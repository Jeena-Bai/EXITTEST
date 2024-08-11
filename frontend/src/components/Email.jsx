import React from 'react'
import { useState } from 'react';
import axios from 'axios'
function Email ()  {
    const [email, setEmail] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/send-otp',{email})
            if (response.data.success) {
                // Store the OTP ID or some identifier if needed
                window.localStorage.setItem('otpSession', response.data.otpSession);
                // Show the OTP form
                window.location.href = '/verify-otp';
            }
        } catch (error) {
            console.error("Error sending OTP", error);
            alert("Failed to send OTP. Please try again.");
        }
    };
  return (
    <div>
                <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <button type="submit">Submit</button>
            </form>
</div>
        );
    }
    
    export default Email;
   