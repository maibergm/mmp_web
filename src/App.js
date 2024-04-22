import React, { useState, useEffect } from 'react';
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
import { FaWhatsapp } from "react-icons/fa";
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
      <div className = "home">
        <div className = "home-content">
        <div className = "home-left-content">
          <h2 className = "home-left-text"> Your seamless move starts here. Trust the experts for a stress-free journey.</h2>
          <Link to="/estimate" className="home-quote-button" style={{ textDecoration: 'none' }}>
            Get a Quote
          </Link>
        </div>
        <div className = "home-right-content">
          <h5 className = "home-subheading"> Get in contact with us today! </h5>
          <div className = "home-name">
            <div className="mb-3 home-boxes" >
              <input type="text" className="form-control home-inputs" placeholder = "Name" />
            </div>
            <div className="mb-3 home-boxes" >
              <input type="text" className="form-control home-inputs" placeholder = "Surname" />
            </div>
          </div>

          <div className="mb-3 home-boxes" >
            <input type="text" className="form-control home-inputs" placeholder = "Phone Number" />
          </div>
          <div className="mb-3 home-boxes" >
            <input type="text" className="form-control home-inputs" placeholder = "E-mail" />
          </div>
          <div className="mb-3 home-boxes">
            <textarea
              className="form-control home-inputs"
              placeholder="Enter your message here..."
              rows="5" // Number of visible lines
            />
            </div>
          <button className =" home-button">Callback</button>
        </div>
      </div>
    </div>

    )
  };

  const AboutUs = () => {
    return (
      <div className="aboutus">
        <div className="aboutus-container">
          <img src={CompanyLogo} className="aboutus-logo" />
          <p className = "aboutus-text">
            At Magnum Movers &amp; Packers, we specialize in facilitating seamless office and household
            relocations, providing expert packing, unpacking, and secure storage solutions through our
            trusted partners. Our dedicated team of professionals is committed to delivering exceptional
            customer service and personalized solutions tailored to your unique needs. With our focus
            on efficiency and specialization in both local and long-distance relocations, our wide range of
            services guarantees a stress-free moving experience for our clients.

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
        <FlippableCard title="Home Removals" image= {removalsImage} backContent="Our comprehensive home removal service provides a hassle-free solution for relocating your household belongings to your new residence." />
        <FlippableCard title="Single Item Pickup" image= {singleItemImage} backContent= "Pick-up and transport single items with our item pickup service, ensuring seamless and secure transportation from pickup to delivery." />
        <FlippableCard title="Courier Service" image= {courierImage} backContent="Efficiently deliver packages and goods with our reliable courier service, providing prompt and secure transportation to any destination." />
        <FlippableCard title="In-House Move" image= {inhouseImage} backContent="Efficiently rearrange furniture and items within your home with our convenient in-house move service, tailored to meet all your needs." />
        </div>
      </div>
      )
  };
  const Review = () => {
    const images = [firstReview, secondReview, thirdReview, fourthReview, fifthReview];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="review">
            <h2 className="review-heading">Testimonials</h2>
            <div className="review-content">
                <button className="review-button" onClick={goToPreviousImage}>{'<'}</button>
                <img src={images[currentImageIndex]} alt="Review Image" className="reviewPic" />
                <button className="review-button" onClick={goToNextImage}>{'>'}</button>
            </div>
        </div>
    );
};
  const Faq = () => {
    return(
      <div className = "faq">
        <h2 className = "faq-heading"> Frequently Asked Questions </h2>
        <div className ="faq-content">
        <Accordion>
          <AccordionSummary
            style={{ textAlign: 'left' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"> What services do you offer?
          </AccordionSummary>
          <AccordionDetails style={{ textAlign: 'left' }}>
            We offer a range of services including packing, unpacking, storage solutions, local and long-
            distance relocations, furniture disassembly/reassembly, moving supplies, and disposal
            services.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            style={{ textAlign: 'left' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"> How do you ensure the safety of my belongings during the move?
          </AccordionSummary>
          <AccordionDetails style={{ textAlign: 'left' }}>
            We have a team of experienced professionals who use quality packing materials and
            techniques to ensure the safety of your belongings. Additionally, we offer insurance options
            for added peace of mind. Our team will guide you through the available insurance coverage
            options.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            style={{ textAlign: 'left' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"> Do you offer storage solutions?
          </AccordionSummary>
          <AccordionDetails style={{ textAlign: 'left' }}>
            Yes, we offer secure storage solutions for short or long-term needs. Our partners ensure that
            your belongings are safe and easily accessible.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            style={{ textAlign: 'left' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"> How far in advance should I book my move?
          </AccordionSummary>
          <AccordionDetails style={{ textAlign: 'left' }}>
            It is recommended to book your move as early as possible to secure your preferred moving
            date. However, we also accommodate last-minute moves depending on availability.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            style={{ textAlign: 'left' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"> What area do you serve for relocation services?
          </AccordionSummary>
          <AccordionDetails style={{ textAlign: 'left' }}>
            We provide relocation services locally, nationally, and internationally. Our team is equipped
            to handle moves locally across Ireland and overseas. We have a network of partners in
            various regions to ensure a smooth relocation experience wherever you are moving to.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            style={{ textAlign: 'left' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"> Do you offer specialized moving services for fragile or valuable items?
          </AccordionSummary>
          <AccordionDetails style={{ textAlign: 'left' }}>
            Yes, we provide specialized services for fragile or valuable items such as fine art, antiques,
            pianos, and other delicate possessions. Our team handles these items with care and
            attention to detail to ensure their safe transport to your new location.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            style={{ textAlign: 'left' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"> How do you handle scheduling changes or unforeseen circumstances?
          </AccordionSummary>
          <AccordionDetails style={{ textAlign: 'left' }}>
            We understand that unexpected situations can arise, and we are flexible in accommodating
            scheduling changes whenever possible. Our customer service team is available to assist you
            in rescheduling your move or adapting to any unforeseen circumstances that may affect your
            relocation.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            style={{ textAlign: 'left' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"> Do you do office relocations?
          </AccordionSummary>
          <AccordionDetails style={{ textAlign: 'left' }}>
            Yes, we specialize in office relocations and have extensive experience in moving businesses
            of all sizes. Our team understands the unique requirements of relocating an office space,
            including handling office furniture, electronics, and important documents with care and
            efficiency.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            style={{ textAlign: 'left' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"> Do I need to be present at home during packing and relocation services?
          </AccordionSummary>
          <AccordionDetails style={{ textAlign: 'left' }}>
            Typically, you do not necessarily need to be present at home during packing and relocation
            services. However, we do recommend being present.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            style={{ textAlign: 'left' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"> When do I have to pay for the packing and relocation services?
          </AccordionSummary>
          <AccordionDetails style={{ textAlign: 'left' }}>
            Payment is typically expected at the time of service completion or before the move takes
            place. In some cases, we may require a deposit or partial payment upfront. Payment terms
            will be discussed with our customer service team.
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
      <Card className="card-class" sx={{ maxWidth: 500, maxHeight:900, border: '2px solid black', backgroundColor: "black", }}>
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
        <Home />
        <div className ="app-section">
          <AboutUs/>
        </div>
        <Callbanner/>
        <div className ="app-section">
          <Services/>
        </div>
        <Review/>
        <div className ="app-section">
        <Faq/>
        </div>
        <Footer/>
        <Routes>
          <Route path="/estimate" element={<Estimate />} />
        </Routes>
      </div>
  );
}

export default App;
