import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './Home.css';
import './App.css';
import backgroundImage from './Images/seb-creativo-3jG-UM8IZ40-unsplash.jpg'; // Replace with the actual path to your image
import secondImage from './Images/florian-steciuk-F7Rl02ir0Gg-unsplash2.jpg'; // Replace with the actual path to your image
import CallbackModal from './CallbackModal';
import EstimatePage from './EstimatePage';

function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
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


        <Routes>
          <Route path="/estimate" element={<EstimatePage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
  );
}

export default Home;
