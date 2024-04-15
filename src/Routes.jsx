import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Innerpage from "./pages/Innerpage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Rent from "./pages/Rent";

import Payment from "./pages/Payment";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productDetail/:bikeId" element={<Innerpage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/rent/:bikeId" element={<Rent />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};
