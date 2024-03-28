import React from 'react';
import Navbar from './Navbar'
import './PrivacyPolicy.css'
import Callbanner from './Callbanner'
import Footer from './Footer'

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <Navbar/>
      <div className ="privacy-policy-content">
        <h1 className="privacy-policy-heading">Privacy Policy</h1>
        <p className="privacy-policy-text">
          At Magnum Movers & Packers, we are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use,
          disclose, and protect the information you provide to us. By using our website or services, you consent to the terms outlined in this Privacy Policy.
        </p>
        <br />
        <h4 className="privacy-policy-subheading">Information We Collect</h4>
        <br />
        <p className="privacy-policy-text">
          We collect personal information that you voluntarily provide to us when using our website or services. This may include:
        </p>
        <ul className="privacy-policy-list">
          <li><strong>Name and Surname:</strong> We collect your full name to personalize our services and communications.</li>
          <li><strong>Address and Postcode:</strong> Your address and postcode are used for logistical purposes, such as determining service availability and calculating distances for cost estimation.</li>
          <li><strong>Phone Number and Email:</strong> We use your phone number and email address to communicate with you regarding our services and to provide updates or notifications.</li>
        </ul>
        <br />
        <h4 className="privacy-policy-subheading">Use of Information</h4>
        <br />
        <p className="privacy-policy-text">
          We use the information you provide to us for the following purposes:
        </p>
        <ul className="privacy-policy-list">
          <li><strong>Service Delivery:</strong> Your information is essential for us to deliver our services efficiently and effectively.</li>
          <li><strong>Cost Calculations:</strong> We may use your address and postcode to calculate distances and provide accurate cost estimates for our services.</li>
          <li><strong>Communication:</strong> We use your contact details to communicate with you regarding your service requests, updates, and other relevant information.</li>
        </ul>
        <br />
        <h4 className="privacy-policy-subheading">Protection of Information</h4>
        <br />
        <p className="privacy-policy-text">
          We take appropriate measures to safeguard your personal information and prevent unauthorized access, disclosure, alteration, or destruction.This includes implementing
          industry-standard security practices and regularly updating our security protocols.
        </p>
        <br />
        <h4 className="privacy-policy-subheading">Disclosure of Information</h4>
        <br />
        <p className="privacy-policy-text">
          We do not sell, trade, or otherwise transfer your personal information to outside parties unless required for the provision of services or as required by law.
        </p>
        <br />
        <h4 className="privacy-policy-subheading">Your Rights</h4>
        <br />
        <p className="privacy-policy-text">
          You have the right to access, update, or delete your personal information stored with us. If you would like to exercise these rights or have any questions about our
          Privacy Policy, please contact us using the information provided below.
        </p>
        <br />
        <h4 className="privacy-policy-subheading">Changes to Privacy Policy</h4>
        <br />
        <p className="privacy-policy-text">
          We reserve the right to update or modify this Privacy Policy at any time without prior notice. Any changes will be effective immediately upon posting on this page.
        </p>
        <br />
        <h4 className="privacy-policy-subheading">Contact Us</h4>
        <br />
        <p className="privacy-policy-text">
          If you have any questions, concerns, or requests regarding our Privacy Policy or the handling of your personal information, please contact us at:
          <br/>
          <br/>
          Magnum Movers & Packers
          <br/>
          [Contact Information]
          <br/>
          <br/>
          This Privacy Policy was last updated on 28th March 2024.
        </p>
      </div>
      <Callbanner/>
      <Footer/>
    </div>
  );
}

export default PrivacyPolicy;
