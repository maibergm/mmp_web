import React, { useState } from 'react';
import './AboutUs.css';
import TailoredSolutionsImage from './Images/erda-estremera-sxNt9g77PE0-unsplash.jpg';
import ProfessionalExpertiseImage from './Images/ruthson-zimmerman-Ws4wd-vJ9M0-unsplash.jpg';
import ReliabilityImage from './Images/sincerely-media-EtyBBUByPSQ-unsplash.jpg';

function AboutUs() {

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
  );
}

export default AboutUs;
