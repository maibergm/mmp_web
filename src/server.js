const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line to import cors

const app = express();

const allowedOrigins = ['http://localhost:3000', 'http://localhost:4000'];


app.use(cors({
  origin: function (origin, callback) {
    // Check if the origin is in the allowed list; if it is, allow it
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      // Deny the request if the origin is not in the allowed list
      callback(new Error('Not allowed by CORS'));
    }
  },
}));
// Middleware to parse JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Create a Nodemailer transporter using your email service credentials
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Change this to your email service (e.g., Gmail, SendGrid)
  auth: {
    user: 'emailbotassist@gmail.com', // Your email address
    pass: 'rqgvyqpzkqyvcbfq' // Your email password or app password
  }
});

// Handle form submissions
app.post('/submit-form', (req, res) => {
  const { title, firstName, surname,email,phone } = req.body;

  const mailOptions = {
    from: 'emailbotassist@gmail.com', // Sender's email address
    to: 'maxmai96@gmail.com', // Recipient's email address
    subject: 'Callback Request', // Email subject
    text: `Title: ${title}\nName: ${firstName}\nSurname: ${surname}\nEmail: ${email}\nPhone Number: ${phone}` // Email body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
