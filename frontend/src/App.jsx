import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Email from './components/Email';
import Otp from './components/Otp';
import Welcome from './components/welcome';

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Email/>} />
        <Route path="/enter-otp" element={<Otp/>} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
 
  );
}

export default App;
