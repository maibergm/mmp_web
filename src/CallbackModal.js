import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CallbackModal = ({ show, handleClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    console.log('Submit button clicked');
    event.preventDefault();


    // Create an object with the form data
    const formData = {
      name,
      email,
      phoneNumber,
    };

    // Make a POST request to the server's /submit-form endpoint
    fetch('http://localhost:4000/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 200) {
          // Successfully sent email
          console.log('Email sent successfully');
          // Reset the form fields
          setName('');
          setEmail('');
          setPhoneNumber('');
          handleClose(); // Close the modal
        } else {
          // Failed to send email, handle the error
          console.error('Error sending email');
          // You can display an error message to the user if needed
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle any network or other errors here
      });
      handleClose(); // Close the modal
  };

  return (
    <Modal show={show} onHide={handleClose} dialogClassName="modal-lg">
      <Modal.Header closeButton>
        <Modal.Title>Callback Request</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add your modal content here */}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </Form.Group>
          <Form.Group controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      {/* Rest of your modal code */}
    </Modal>
  );
};

export default CallbackModal;
