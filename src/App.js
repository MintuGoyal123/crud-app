import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import Products from "./Products";
import Home from "./Home";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("loggedIn") === "true"; // Corrected check
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </Router>
);

export default App;
