// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar custom-navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <span className="navbar-brand">Magnum</span>
          {/* Other content can go here, e.g., navigation links */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
