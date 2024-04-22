// Navbar.js
import React from 'react';
import './Footer.css';
import CompanyLogo from './assets/mmpLogo.png';
import { Link } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: smooth scrolling animation
    });
  };
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-contact-us">
          <h3 className="footer-heading-text">Contact Us</h3>
          <p className ="footer-text">Email: info@magnummp.ie</p>
          <p className ="footer-text">Phone: 123-456-7890</p>
        </div>
        <div className="footer-opening-hours">
          <h3 className="footer-heading-text">Office Opening Hours</h3>
          <p className ="footer-text">Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p className ="footer-text">Saturday: 10:00 AM - 3:00 PM</p>
          <p className ="footer-text">Sunday: Closed</p>
        </div>
        <div className="footer-logo">
          <img src={CompanyLogo} alt="Company Logo" className="footer-company-logo" />
        </div>
      </div>
      <div className ="footer-company-name-text">
        <p className="footer-text">&copy; 2024 Magnum Movers & Packers. All rights reserved |&nbsp;
        <Link to="/privacypolicy" className="footer-privacy-policy" onClick={scrollToTop}>
           Privacy Policy
        </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
