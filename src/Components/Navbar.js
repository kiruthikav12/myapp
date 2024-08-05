import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <a href="/">
            {/* Add your logo image or text here */}
          </a>
        </div>
        <ul className="navbar-menu-left">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/find-doctors">Doctors</Link></li>
          <li><a href="/appointments">Appointments</a></li>
          <li><a href="/emergency" className="emergency-link">Emergency</a></li>
          <li className="dropdown">
            <a href="/" className="dropbtn">More</a>
            <div className="dropdown-content">
              <Link to="/about-us">About</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="navbar-menu-right">
          <li><a href="/login">Login/Signup</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
