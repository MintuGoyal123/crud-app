import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome to Product CRUD</h1>
      <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link> | <Link to="/products">Products</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
