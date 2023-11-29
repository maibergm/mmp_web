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
  const { totalVolume, formData, bedroomItemList ,kitchenItemList,livingRoomItemList, diningRoomItemList, outsideItemList,
          bathroomItemList, miscItemList, officeItemList, extraBedroomItems, extraKitchenItems, extraLivingRoomItems,
          extraDiningRoomItems, extraOutsideItems, extraBathroomItems, extraMiscItems, extraOfficeItems} = req.body;

  const bedroomItemListText = Object.entries(bedroomItemList)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  const extraBedroomItemListText = Object.entries(extraBedroomItems)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  const totalBedroomItemListText = `${bedroomItemListText}\n${extraBedroomItemListText}`;


  const kitchenItemListText = Object.entries(kitchenItemList)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  const extraKitchenItemListText = Object.entries(extraKitchenItems)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  const totalKitchenItemListText = `${kitchenItemListText}\n${extraKitchenItemListText}`;

  const livingRoomItemListText = Object.entries(livingRoomItemList)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  const extraLivingRoomItemListText = Object.entries(extraLivingRoomItems)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  const totalLivingRoomItemListText = `${livingRoomItemListText}\n${extraLivingRoomItemListText}`;

  const diningRoomItemListText = Object.entries(diningRoomItemList)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  const extraDiningRoomItemListText = Object.entries(extraDiningRoomItems)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  const totalDiningRoomItemListText = `${diningRoomItemListText}\n${extraDiningRoomItemListText}`;

  const outsideItemListText = Object.entries(outsideItemList)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  const extraOutsideItemListText = Object.entries(extraOutsideItems)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  const totalOutsideItemListText = `${outsideItemListText}\n${extraOutsideItemListText}`;

  const bathroomItemListText = Object.entries(bathroomItemList)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  const extraBathroomItemListText = Object.entries(extraBathroomItems)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  const totalBathroomItemListText = `${bathroomItemListText}\n${extraBathroomItemListText}`;

  const miscItemListText = Object.entries(miscItemList)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  const extraMiscItemListText = Object.entries(extraMiscItems)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  const totalMiscItemListText = `${miscItemListText}\n${extraMiscItemListText}`;

  const officeItemListText = Object.entries(officeItemList)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  const extraOfficeItemListText = Object.entries(extraOfficeItems)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  const totalOfficeItemListText = `${officeItemListText}\n${extraOfficeItemListText}`;
  const mailOptions = {
    from: 'emailbotassist@gmail.com', // Sender's email address
    to: 'maxmai96@gmail.com', // Recipient's email address
    subject: 'Callback Request', // Email subject
    text: `Name: ${formData.firstName} ${formData.surname} E-mail: ${formData.email} Phone Number: ${formData.phone}
          \nPickup Details \n${formData.pickupProp}\n${formData.pickupAdd} \n${formData.pickupEir}\n${formData.pickupDate}
          \nDelivery Details \n${formData.deliveryProp}\n${formData.deliveryAdd} \n${formData.deliveryEir}\n${formData.deliveryDate}\nVolume: ${totalVolume}
          \nBedroom\n${totalBedroomItemListText}\n\nKitchen\n${totalKitchenItemListText}\n\nLiving Room\n${totalLivingRoomItemListText}\n\nDining Room\n${totalDiningRoomItemListText}
          \n\nGarden/Garage\n${totalOutsideItemListText}\n\nBathroom\n${totalBathroomItemListText}\n\nMisc\n${totalMiscItemListText}\n\nOffice\n${totalOfficeItemListText} ` // Email body
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
