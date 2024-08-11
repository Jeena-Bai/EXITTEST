import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{Router,Routes,Route} from 'react-router-dom'
import Email from './components/Email'
import Otp from './components/Otp'
const App=() =>{
  

  return (
    <>
  
    <Routes>
        <Route path="/" element={<Email/>} />
        <Route path="/verify-otp" element={<Otp/>} />
        <Route path="/welcome" element={<div>Welcome!</div>} />
    </Routes>

    </>
  )
}

export default App
