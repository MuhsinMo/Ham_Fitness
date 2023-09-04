import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import WorkoutPlan from './Pages/WorkoutPlan';
import './App.css';

const App = () => (
  
    <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/workout/:id" element={<WorkoutPlan/>} />
      </Routes>
      <Footer/>
    </Box>


)

export default App;