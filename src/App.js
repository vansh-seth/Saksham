import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Vision from './pages/Vision';
import Home from './pages/Home';
import Vision1 from './pages/Vision1';
import Deaf from './pages/Deaf';
import Map from './pages/Map';
import Physical from './pages/Physical';
import Mental from './pages/Mental';
import Prosthetics from './pages/Prosthetics';
import Alert from './pages/Alert';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Signin" element={<Signin />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Vision1" element={<Vision1 />} />
        <Route exact path="/Deaf" element={<Deaf />} /> 
        <Route exact path="/Map" element={<Map />} />
        <Route exact path="/Physical" element={<Physical />} />
        <Route exact path="/Mental" element={<Mental />} />
        <Route exact path="/Prosthetics" element={<Prosthetics />} />
        <Route exact path="/Alert" element={<Alert />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
