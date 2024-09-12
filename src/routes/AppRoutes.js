import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Games from "../pages/Games/Games";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<Home />} />
    <Route path="/games" element={<Games />} />

    <Route path="/privacypolicy" 
    element={<PrivacyPolicy />} />
  </Routes>
);

export default AppRoutes;
