import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Otp() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/verify-otp', { otp });
      if (response.data.success) {
        navigate('/welcome');
      } else {
        alert('Invalid OTP');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter OTP</label>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Otp;

