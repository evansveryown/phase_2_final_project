// Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo" style={{ fontWeight: 700, fontSize: "1.3rem", letterSpacing: "1px" }}>
          💡 IdeaBoard
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/add" className={location.pathname === "/add" ? "active" : ""}>Add Idea</Link>
        <Link to="/favorites" className={location.pathname === "/favorites" ? "active" : ""}>Favorites</Link>
      </div>
    </nav>
  );
}

export default Navbar;
