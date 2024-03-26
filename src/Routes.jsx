import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Innerpage from './pages/Innerpage';
import Login from './pages/Login';
import Register from './pages/Register';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productDetail/:bikeId" element={<Innerpage />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  );
};
