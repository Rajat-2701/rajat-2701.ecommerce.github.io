import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const auth = localStorage.getItem("user");
  const user = JSON.parse(auth);
  const navigate = useNavigate();
  // logout function to clear localstorage:
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div className="navbar-products">
      <img
        src="https://yt3.googleusercontent.com/ytc/AMLnZu907ujnXt1ae1wVUDH8NrYtoLeeI5XCK7OsMU3HCw=s900-c-k-c0x00ffffff-no-rj"
        className="logo"
        alt="logo"
      />
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Products</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to="/signup">
              Logout ({user?.name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
