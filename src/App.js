import React, { useState } from 'react';
import { Modal, Button, Form, Carousel, Collapse} from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
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
import { LuPackage } from "react-icons/lu";
import { FaWarehouse } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";


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
        <h2 className = "review-heading"> Customer Reviews </h2>
        <Carousel fade controls={false} indicators={false} className="carousel-slide">
          <Carousel.Item>
            <div className="slides">
              <p className = "review-text"> Ed was very friendly and professional in packing my belongings.
               My boxes and furniture were delivered with care and it was a very fast process, they even took my monstrosity of a palm tree. Highly recommend!!</p>
               <p className="review-text"> - Dita</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slides">
              <p className = "review-text"> I have to say Ed and the guys were amazing. Our completion date moved probably more than 6 times and Ed was always available with solutions.
               When we finally got our date, Ed had one day to manage and turn around and himself and the team were just fantastic. I would highly recommend. Moving is stressful
               but this is one thing Ed and the team remove from your worries. thanks so much</p>
               <p className="review-text"> - Nicky</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slides">
              <p className = "review-text"> The team were extremely professional and easy to deal with. Great contact before the move, lots of preparation work and made the move seamless.
               Cannot recommend the team enough. Moved everything from 3 bed house to new larger home in one day.</p>
               <p className="review-text"> - Alan</p>
            </div>
          </Carousel.Item>
        </Carousel>
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
  const Services = () => {
    let cardWidth = "21rem";
    return(
      <div className = "services-list">
        <div className ="packing-service service-sections">
          <Card sx={{ maxWidth: cardWidth, border: '2px solid black', backgroundColor:"black" }}>
            <CardContent>
              <LuPackage size="5rem" color ="white"/>
              <Typography gutterBottom variant="h5" component="div" color="white">
                Packing
              </Typography>
              <Typography variant="body2" color="white" fontSize = "12px">
                Our professional packing service ensures your belongings are carefully and securely packed using high-quality materials and expertise. From delicate china to cumbersome furniture, our experienced team handles everything efficiently, providing peace of mind throughout the moving process.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className ="storage-service service-sections">
          <Card sx={{ maxWidth: cardWidth, border: '2px solid black', backgroundColor:"black" }}>
            <CardContent>
              <FaWarehouse size="5rem" color="white" />
              <Typography gutterBottom variant="h5" component="div" color="white">
                Storage
              </Typography>
              <Typography variant="body2" color="white" fontSize = "12px">
                Our storage solutions offer a safe and convenient option for securely storing your belongings during transitions or when space is limited. With various storage unit sizes
                available and state-of-the-art security features, our storage services provide peace of mind knowing your items are in a protected environment.
                </Typography>
            </CardContent>
          </Card>
        </div>
        <div className ="home-removal-service service-sections">
          <Card sx={{ maxWidth: cardWidth, border: '2px solid black', backgroundColor:"black" }}>
            <CardContent>
              <FaHouseChimney size="5rem" color ="white"/>
              <Typography gutterBottom variant="h5" component="div" color="white">
                Home Removals
              </Typography>
              <Typography variant="body2" color="text.secondary" color="white" fontSize = "12px">
                Our home removal service provides a hassle-free solution for relocating your household belongings to your new residence. With a professional team handling every aspect
                of the move, from packing and loading to transportation and unloading, we ensure a smooth transition.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className ="single-item-service service-sections">
          <Card sx={{ maxWidth: cardWidth, border: '2px solid black', backgroundColor:"black" }}>
            <CardContent>
              <FaHouseChimney size="5rem" color ="white"/>
              <Typography gutterBottom variant="h5" component="div" color="white">
                Single Item Pickup
              </Typography>
              <Typography variant="body2" color="text.secondary" color="white" fontSize = "12px">
                Our home removal service provides a hassle-free solution for relocating your household belongings to your new residence. With a professional team handling every aspect
                of the move, from packing and loading to transportation and unloading, we ensure a smooth transition.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className ="courier-service service-sections">
          <Card sx={{ maxWidth: cardWidth, border: '2px solid black', backgroundColor:"black" }}>
            <CardContent>
              <FaHouseChimney size="5rem" color ="white"/>
              <Typography gutterBottom variant="h5" component="div" color="white">
                Courier Service
              </Typography>
              <Typography variant="body2" color="text.secondary" color="white" fontSize = "12px">
                Our home removal service provides a hassle-free solution for relocating your household belongings to your new residence. With a professional team handling every aspect
                of the move, from packing and loading to transportation and unloading, we ensure a smooth transition.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className ="in-house-move-service service-sections">
          <Card sx={{ maxWidth: cardWidth, border: '2px solid black', backgroundColor:"black" }}>
            <CardContent>
              <FaHouseChimney size="5rem" color ="white"/>
              <Typography gutterBottom variant="h5" component="div" color="white">
                In-House Move
              </Typography>
              <Typography variant="body2" color="text.secondary" color="white" fontSize = "12px">
                Our home removal service provides a hassle-free solution for relocating your household belongings to your new residence. With a professional team handling every aspect
                of the move, from packing and loading to transportation and unloading, we ensure a smooth transition.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  };
  return (
      <div className="App">
        <Navbar /> {/* Corrected syntax for rendering the Navbar component */}
        <Home />
        <div className ="app-section">
          <Services/>
          <Reviews/>
        </div>
        <Routes>
          <Route path="/estimate" element={<Estimate />} />
          {/* Add more routes as needed */}
        </Routes>
        {/* Additional content */}
      </div>
  );
}

export default App;
