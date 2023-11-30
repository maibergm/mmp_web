const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line to import cors

const app = express();

const allowedOrigins = ['http://localhost:3000', 'http://localhost:4000'];
function generateItemText(itemList, extraItemList) {
  const itemText = Object.entries(itemList)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  const extraItemText = Object.entries(extraItemList)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  return `${itemText}\n${extraItemText}`;
}

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
  const {
    totalVolume,
    formData,
    bedroomItemList,
    kitchenItemList,
    livingRoomItemList,
    diningRoomItemList,
    outsideItemList,
    bathroomItemList,
    miscItemList,
    officeItemList,
    extraBedroomItems,
    extraKitchenItems,
    extraLivingRoomItems,
    extraDiningRoomItems,
    extraOutsideItems,
    extraBathroomItems,
    extraMiscItems,
    extraOfficeItems
  } = req.body;

  const totalBedroomItemListText = generateItemText(bedroomItemList, extraBedroomItems);
  const totalKitchenItemListText = generateItemText(kitchenItemList, extraKitchenItems);
  const totalLivingRoomItemListText = generateItemText(livingRoomItemList, extraLivingRoomItems);
  const totalDiningRoomItemListText = generateItemText(diningRoomItemList, extraDiningRoomItems);
  const totalOutsideItemListText = generateItemText(outsideItemList, extraOutsideItems);
  const totalBathroomItemListText = generateItemText(bathroomItemList, extraBathroomItems);
  const totalMiscItemListText = generateItemText(miscItemList, extraMiscItems);
  const totalOfficeItemListText = generateItemText(officeItemList, extraOfficeItems);
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
