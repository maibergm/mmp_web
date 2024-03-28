// Navbar.js
import React from 'react';
import './Navbar.css';
import CompanyLogo from './assets/mmpLogo.png';
import BoxLogo from './assets/mmpLogoBox.png';
import TextLogo from './assets/mmpLogoText.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar custom-navbar">
      <div className="navbar-content">
        <div className="navbar-logo-content">
          <Link to="/">
            <img src={CompanyLogo} alt="Company Logo" className="navbar-logo" />
          </Link>
        </div>
        <div className="navbar-right-content">
          <button className = "navbar-button">Booking Form</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
