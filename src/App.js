import React, { useState } from 'react';
import { Modal, Button, Form, Carousel, Collapse} from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import inhouseImage from './assets/clay-banks-fAprylEyuCs-unsplash.jpg'
import courierImage from './assets/rosebox-BFdSCxmqvYc-unsplash.jpg'
import singleItemImage from './assets/brandable-box-8mCsyImZRGY-unsplash.jpg'
import storageImage from './assets/joshua-coleman-ZVkDLrXGMdw-unsplash.jpg'
import removalsImage from './assets/tania-melnyczuk-Iw3yGDDr1AY-unsplash.jpg'
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
import Footer from './Footer'
import Callbanner from './Callbanner'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LuPackage } from "react-icons/lu";
import { FaWarehouse } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import { RiEBike2Fill } from "react-icons/ri";
import { LuPackageOpen } from "react-icons/lu";
import { TbTrolley } from "react-icons/tb";
import { useSpring, animated } from 'react-spring';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CompanyLogo from './assets/mmpLogo.png';



function App() {
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
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
  const HomeTest = () => {
    return(
      <div className ="homeTest">
        <div className = "homeTest-images">
          <img src={backgroundImage} className="homeTest-image" />
          <div className = "homeTest-content">
            <div className = "homeTest-left-content">
            <p className = "homeTest-left-text">
              Your seamless move starts here. Trust the experts for a stress-free journey
            </p>
            </div>
            <div className ="homeTest-right-content">
              <h5 className = "homeTest-subheading">Want us to call you?  </h5>
              <div className = "homeTest-name">
                <div className="mb-3 homeTest-boxes" >
                  <input type="text" className="form-control homeTest-inputs" placeholder = "Name" />
                </div>
                <div className="mb-3 homeTest-boxes" >
                  <input type="text" className="form-control homeTest-inputs" placeholder = "Surname" />
                </div>
              </div>

              <div className="mb-3 homeTest-boxes" >
                <input type="text" className="form-control homeTest-inputs" placeholder = "Phone Number" />
              </div>
              <div className="mb-3 homeTest-boxes" >
                <input type="text" className="form-control homeTest-inputs" placeholder = "E-mail" />
              </div>

              <div className = "homeTest-name">
                <div className="mb-3 homeTest-boxes" >
                  <input type="text" className="form-control homeTest-inputs" placeholder = "Moving From" />
                </div>
                <div className="mb-3 homeTest-boxes" >
                  <input type="text" className="form-control homeTest-inputs" placeholder = "Moving To" />
                </div>
              </div>
              <button className ="form-control homeTest-button">Callback</button>
            </div>
          </div>
        </div>
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
      <div className="aboutus">
        <div className="aboutus-container">
          <img src={CompanyLogo} className="aboutus-logo" />
          <p className = "aboutus-text">
               At Magnum Movers & Packers, our team of dedicated professionals is committed to providing exceptional customer service and personalized
               solutions tailored to meeting your unique needs. With a comprehensive range of moving services we're able to tailor to your every need, from
               local moves to long-distance relocations, explore our range of services to discover how we can assist you in making your next move seamless
               and stress-free.

          </p>
        </div>
      </div>
    )
  };
  const Services = () => {
    let cardWidth = "25rem";
    let topPadding = "1rem";
    return(
      <div className = "services">
        <h1 className ="services-heading"> Services </h1>
        <div className="services-list">
        <FlippableCard className = "services-packing-card" title="Packing" image= {TailoredSolutionsImage} backContent="Our professional packing service ensures your belongings are carefully and securely packed using high-quality materials and expertise." />
        <FlippableCard title="Storage" image= {storageImage} backContent="Our storage solutions offer a safe and convenient option for securely storing your belongings during transitions or when space is limited." />
        <FlippableCard title="Home Removals" image= {removalsImage} backContent="Our home removal service provides a hassle-free solution for relocating your household belongings to your new residence. " />
        <FlippableCard title="Single Item Pickup" image= {singleItemImage} backContent= "Conveniently pick up and transport single items with ease using our specialized single-item pickup service." />
        <FlippableCard title="Courier Service" image= {courierImage} backContent="Efficiently deliver packages and goods with our reliable courier service, ensuring timely and secure transportation. " />
        <FlippableCard title="In-House Move" image= {inhouseImage} backContent="Efficiently rearrange furniture and items within your home with our convenient in-house move service." />
        </div>
      </div>
      )
  };
  const ReviewTest = () => {
    return(
      <div className = "reviewTest">
        <h2 className = "reviewTest-heading"> Customer Reviews </h2>
        <div className = "reviewTest-content">
          <img src={firstReview} alt="Company Logo" className="reviewPic" />
          <img src={secondReview} alt="Company Logo" className="reviewPic" />
          <img src={thirdReview} alt="Company Logo" className="reviewPic" />
          <img src={fourthReview} alt="Company Logo" className="reviewPic" />
          <img src={fifthReview} alt="Company Logo" className="reviewPic" />
        </div>
      </div>
    )

  };
  const Faq = () => {
    return(
      <div className = "faq">
        <h2 className = "faq-heading"> Frequently Asked Questions </h2>
        <div className ="faq-content">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"> Do you offer packing and unpacking services?
          </AccordionSummary>
          <AccordionDetails>
            Yes, we offer comprehensive packing and unpacking services to make your move hassle-free.
            Our trained professionals will carefully pack your belongings using high-quality materials
            to ensure their safety during transit. Upon arrival at your new destination, we can also assist
            with unpacking and setting up your items according to your preferences.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"> Are my belongings insured during the move?
          </AccordionSummary>
          <AccordionDetails>
            Yes, we understand the importance of protecting your belongings during the moving process.
            That's why we offer various insurance options to provide you with peace of mind. Our team
            will guide you through the available insurance coverage options and help you choose the one that best suits your needs.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"> Do you provide storage options for my belongings?
          </AccordionSummary>
          <AccordionDetails>
            Yes, we offer secure storage solutions for customers who require temporary or long-term storage for their belongings.
            Our storage facilities are equipped with state-of-the-art security measures to ensure the safety of your items until you're ready to retrieve them.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"> What areas do you serve for removal services?
          </AccordionSummary>
          <AccordionDetails>
             We provide removal services across all of Ireland. Whether you're moving within the same county or relocating to a different
             county, we have the expertise and resources to assist you.
          </AccordionDetails>
        </Accordion>
        </div>
      </div>
    )
  };
  const FlippableCard = ({ title, image, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="service-sections">
      <Card className="card-class" sx={{ maxWidth: 500, maxHeight:900, border: '2px solid black', backgroundColor: "black" }}>
        <CardActionArea onClick={handleCardClick}>
          {isFlipped ? (
            <CardContent>
              <Typography gutterBottom variant="body1" component="div" color="white" sx={{ fontSize: "1rem" }}>
                {backContent}
              </Typography>
            </CardContent>
          ) : (
            <>
              <CardMedia
                className = "services-card-images"
                component="img"
                height="140"
                image={image}
                alt={title}
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div" color="white">
                {title}
              </Typography>
              <Typography variant="body2" color="white">
                {backContent}
              </Typography>
              </CardContent>
            </>
          )}
        </CardActionArea>
      </Card>
    </div>
  );
};
  return (
      <div className="App">
        <Navbar /> {/* Corrected syntax for rendering the Navbar component */}
        <HomeTest />
        <div className ="app-section">
          <AboutUs/>
        </div>
        <Callbanner/>
        <div className ="app-section">
          <Services/>
          <Reviews/>
          <Faq/>
        </div>
        <ReviewTest/>
        <Footer/>
        <Routes>
          <Route path="/estimate" element={<Estimate />} />
        </Routes>
      </div>
  );
}

export default App;
