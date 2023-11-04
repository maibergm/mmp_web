import Home from './Home.js';
import Navbar from './Navbar.js';
import FAQ from './FAQ.js';
import AboutUs from './AboutUs.js';
import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './Images/seb-creativo-3jG-UM8IZ40-unsplash.jpg'; // Replace with the actual path to your image
import secondImage from './Images/florian-steciuk-F7Rl02ir0Gg-unsplash2.jpg'; // Replace with the actual path to your image
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <AboutUs/>
      <FAQ/>
      {/* Additional content */}
    </div>
  );
}

export default App;
