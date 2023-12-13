import React, { useState } from 'react';
import { Modal, Button, Form, Carousel, Collapse, Card, CardBody } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import backgroundImage from './assets/seb-creativo-3jG-UM8IZ40-unsplash2.jpg'; // Replace with the actual path to your image
import secondImage from './assets/florian-steciuk-F7Rl02ir0Gg-unsplash2.jpg'; // Replace with the actual path to your image
import firstReview from './assets/Review1.JPG'; // Replace with the actual path to your image
import secondReview from './assets/Review2.JPG';
import thirdReview from './assets/Review3.JPG';
import fourthReview from './assets/Review4.JPG';
import fifthReview from './assets/Review5.JPG';
import TailoredSolutionsImage from './assets/erda-estremera-sxNt9g77PE0-unsplash.jpg';
import ProfessionalExpertiseImage from './assets/ruthson-zimmerman-Ws4wd-vJ9M0-unsplash.jpg';
import ReliabilityImage from './assets/sincerely-media-EtyBBUByPSQ-unsplash.jpg';
import './App.css'
import CallbackModal from './CallbackModal';
import Estimate from './Estimate';
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTruck, FaHome, FaBoxes, FaWarehouse } from 'react-icons/fa';
import { GoPackage } from "react-icons/go";
import { LuWarehouse } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const toggleCollapse1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleCollapse2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleCollapse3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleCollapse4 = () => {
    setIsOpen4(!isOpen4);
  };

  const Home = () => {
    return(
      <div className="Home">
          <div className="first-image-container">
            <img src={backgroundImage} className="home-image" />
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
          <CallbackModal show={showModal} handleClose={handleModalClose} />
        </div>
    )
  };
  const Reviews = () => {
  return (
      <div className="review-container">
        <img src={secondImage} alt="Second Background" className="review-image" />
        <div className="carousel-overlay">
        <Carousel fade controls={false} indicators={false} className="carousel-slide">
          <Carousel.Item>
            <img className="slides" src={firstReview}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slides" src={secondReview} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="slides" src={thirdReview} />
          </Carousel.Item>
        </Carousel>
        </div>
      </div>
  );
};
  const AboutUs = () => {
    return (
      <div className="AboutUs">
        <div className="aboutus-container">
          <div className="aboutus-first-section">
            <h1 className="aboutus-first-heading">
              Professional Expertise
            </h1>
            <img src={ProfessionalExpertiseImage} className="aboutus-first-image" />
            <p className="aboutus-first-section-text">
              Our moving company boasts a team of highly skilled and experienced professionals who are well-versed in the art of moving. With a track record of successful relocations,
              we handle every aspect of the move with precision and care. From packing delicate items to transporting valuable possessions, you can trust our experts to handle your belongings as if they were their own.
            </p>
          </div>
          <div className="aboutus-second-section">
            <h1 className="aboutus-second-heading">
              Reliability and Trustworthiness
            </h1>
            <img src={TailoredSolutionsImage} className="aboutus-second-image" />
            <p className="aboutus-second-section-text">
              At our moving company, reliability and trustworthiness are at the core of our service. We understand that moving can be stressful, and we strive to make the process as smooth as possible. Count on us to arrive on time, follow through with our commitments, and ensure your belongings reach their destination safely.
              Our transparent pricing and open communication further establish us as a trusted partner in your move.
            </p>
          </div>
        </div>
      </div>
    )
  };
  const Faq = () => {
    return(
      <div>
        <h2 className = "faq-heading">Frequently Asked Questions</h2>
        <div className="faq-list">
          <Card>
            <Card.Header>
              <Button variant="link" className="btn-block text-left" onClick={toggleCollapse1}>
                Do you offer packing services??
              </Button>
            </Card.Header>
            <Collapse in={isOpen1}>
              <Card.Body>
                Yes we offer packing and un-packing services at an extra charge.
              </Card.Body>
            </Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Button variant="link1" className="btn-block text-left1" onClick={toggleCollapse2}>
                Do you offer insurance for my belongings?
              </Button>
            </Card.Header>
            <Collapse in={isOpen2}>
              <Card.Body>
                Yes we are a fully insured company so if anything is damaged during the move you are fully covered!.
              </Card.Body>
            </Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Button variant="link" className="btn-block text-left" onClick={toggleCollapse3}>
                Can you help with disassembly and reassembly of furniture?
              </Button>
            </Card.Header>
            <Collapse in={isOpen3}>
              <Card.Body>
                Yes we would assemble and disassemble most furniture.
              </Card.Body>
            </Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Button variant="link" className="btn-block text-left" onClick={toggleCollapse4}>
                Do you provide moving supplies and boxes?
              </Button>
            </Card.Header>
            <Collapse in={isOpen4}>
              <Card.Body>
                Yes on request we can provide the neccessary supplies for moving such as tape and boxes at an additional charge.
              </Card.Body>
            </Collapse>
          </Card>



          {/* Add more FAQ items here */}
        </div>
      </div>
    )
  };
  const Banner = () => {
    return(
      <div className="banner">
        <div className = "banner-content">
          <CiDeliveryTruck className="banner-icon" />
          <p>Household Moves</p>
        </div>
        <div className = "banner-content">
          <LuWarehouse className="banner-icon" />
          <p>Storage</p>
        </div>
        <div className = "banner-content">
          <GoPackage className="banner-icon" />
          <p>Packing</p>
        </div>
        <div className = "banner-content">
          <HiOutlineBuildingOffice2 className="banner-icon" />
          <p>Commerical</p>
        </div>
    </div>
    )
  };
  return (
    <div className="App">
      <Navbar /> {/* Corrected syntax for rendering the Navbar component */}
      <Home />
      <Banner/>
      <Reviews/>
      <AboutUs/>
      <Faq/>
      <Routes>
        <Route path="/estimate" element={<Estimate />} />
        {/* Add more routes as needed */}
      </Routes>
      {/* Additional content */}
    </div>
  );
}

export default App;
