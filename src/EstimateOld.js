import FAQ from './FAQ.js';
import AboutUs from './AboutUs.js';
import React, { useState } from 'react';
import { Modal, Button, Form, Carousel } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import backgroundImage from './Images/seb-creativo-3jG-UM8IZ40-unsplash.jpg'; // Replace with the actual path to your image
import secondImage from './Images/florian-steciuk-F7Rl02ir0Gg-unsplash2.jpg'; // Replace with the actual path to your image
import firstReview from './Images/Review1.JPG'; // Replace with the actual path to your image
import secondReview from './Images/Review2.JPG';
import thirdReview from './Images/Review3.JPG';
import fourthReview from './Images/Review4.JPG';
import fifthReview from './Images/Review5.JPG';
import './App.css'
import CallbackModal from './CallbackModal';
import Estimate from './Estimate';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  const Navbar = () => {
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
  };
  const Home = () => {
    return(
      <div className="Home">
          <div className="first-image-container">
            <img src={backgroundImage} alt="First Background" className="first-image" />
            <div className="text-overlay">
              <div className="text-first-image">
                Your seamless move starts here. Trust the experts for a stress-free journey
              </div>
              <div className="button-container">
                <Link to="/estimate">
                  <button className="estimate-button">Request an Estimate</button>
                </Link>
                <button className="callback-button" onClick={handleModalOpen}>
                  Request a Callback
                </button>
              </div>
            </div>
          </div>
          <div className="second-image-container">
            <img src={secondImage} alt="Second Background" className="second-image" />
            <div className="text-over-second-image">
              <h2 className="sub-heading">We handle the logistics, while you focus on new beginnings</h2>
            </div>
          </div>
          <CallbackModal show={showModal} handleClose={handleModalClose} />
        </div>
    )
  };
  const Reviews = () => {
  return (
    <div className="window-container">
      <div className="window">
        <Carousel interval={3000} className="carousel slide">
          <Carousel.Item>
            <img className="d-block w-100" src={firstReview} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={secondReview} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={thirdReview} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

  return (
    <div className="App">
      <Navbar /> {/* Corrected syntax for rendering the Navbar component */}
      <Home />
      <Reviews/>
      <Routes>
        <Route path="/estimate" element={<Estimate />} />
        {/* Add more routes as needed */}
      </Routes>
      {/* Additional content */}
    </div>
  );
}

export default App;
