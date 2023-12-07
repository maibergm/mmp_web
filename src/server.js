const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();


const allowedOrigins = ['http://localhost:3000', `http://localhost:${process.env.PORT}`];
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
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASSWORD, // Your email password or app password
  }
});

// Handle form submissions
app.post('/submit-form', (req, res) => {
  const formData = req.body;

  let totalVolume,
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
    extraOfficeItems;
  if (formData.moveType === "selfSurvey") {
    ({
      totalVolume,
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
      extraOfficeItems,
    } = req.body);
  }
  const pickupAccessIssues = formData.pickupAdditionalInfo ? `\nPickup Access Issues: ${formData.pickupAdditionalInfo}`
  : '';
  const deliveryAccessIssues = formData.deliveryAdditionalInfo ? `\nDelivery Access Issues: ${formData.deliveryAdditionalInfo}`
  : '';
  const packingServiceReq = formData.packingService ==="Yes" ? `\nPacking Service Required`
  : '';
  const smallBoxReq  = formData.boxSupplySmall ? `Small Boxes Requested = ${formData.boxSupplySmall}, `: '';
  const mediumBoxReq  = formData.boxSupplyMedium ? `Medium Boxes Requested = ${formData.boxSupplyMedium}, `: '';
  const largeBoxReq  = formData.boxSupplyLarge ? `Large Boxes Requested = ${formData.boxSupplyLarge}, `: '';
  const wardrobeBoxReq  = formData.boxSupplyWardrobe ? `Wardrobe Boxes Requested = ${formData.boxSupplyWardrobe}, `: '';
  const surveyDate = formData.surveyBookingDate ? `\nSurvey Date Requested = ${formData.surveyBookingDate}, `: '';
  const surveyNote = formData.surveyBookingNote ? `\nSurvey Date Note = ${formData.surveyBookingNote}, `: '';
  const boxSupplyReq = formData.boxSupply === "Yes"
  ? `${smallBoxReq}${mediumBoxReq}${largeBoxReq}${wardrobeBoxReq}`
  : '';
  let mailOptions;
  if (formData.moveType === "selfSurvey") {
    const totalBedroomItemListText = generateItemText(bedroomItemList, extraBedroomItems);
    const totalKitchenItemListText = generateItemText(kitchenItemList, extraKitchenItems);
    const totalLivingRoomItemListText = generateItemText(livingRoomItemList, extraLivingRoomItems);
    const totalDiningRoomItemListText = generateItemText(diningRoomItemList, extraDiningRoomItems);
    const totalOutsideItemListText = generateItemText(outsideItemList, extraOutsideItems);
    const totalBathroomItemListText = generateItemText(bathroomItemList, extraBathroomItems);
    const totalMiscItemListText = generateItemText(miscItemList, extraMiscItems);
    const totalOfficeItemListText = generateItemText(officeItemList, extraOfficeItems);
    mailOptions = {
      from: 'emailbotassist@gmail.com',
      to: 'maxmai96@gmail.com',
      subject: 'Estimate Request',
      text: `Name: ${formData.firstName} ${formData.surname} E-mail: ${formData.email} Phone Number: ${formData.phone}${packingServiceReq}
            \n${smallBoxReq}${mediumBoxReq}${largeBoxReq}${wardrobeBoxReq}
            \nPickup Details \n${formData.pickupProp}\n${formData.pickupAdd} \n${formData.pickupEir}\n${formData.pickupDate}${pickupAccessIssues}
            \nDelivery Details \n${formData.deliveryProp}\n${formData.deliveryAdd} \n${formData.deliveryEir}\n${formData.deliveryDate}${deliveryAccessIssues}\nVolume: ${totalVolume}
            \nBedroom\n${totalBedroomItemListText}\n\nKitchen\n${totalKitchenItemListText}\n\nLiving Room\n${totalLivingRoomItemListText}\n\nDining Room\n${totalDiningRoomItemListText}
            \n\nGarden/Garage\n${totalOutsideItemListText}\n\nBathroom\n${totalBathroomItemListText}\n\nMisc\n${totalMiscItemListText}\n\nOffice\n${totalOfficeItemListText} `,
    };
  } else {
    mailOptions = {
      from: 'emailbotassist@gmail.com',
      to: 'maxmai96@gmail.com',
      subject: 'Survey Request',
      text: `Name: ${formData.firstName} ${formData.surname}, E-mail: ${formData.email}, Phone Number: ${formData.phone},${packingServiceReq}
            \n${boxSupplyReq}
            \nPickup Details \n${formData.pickupProp}\n${formData.pickupAdd} \n${formData.pickupEir}\n${formData.pickupDate}${pickupAccessIssues}
            \nDelivery Details \n${formData.deliveryProp}\n${formData.deliveryAdd} \n${formData.deliveryEir}\n${formData.deliveryDate}${deliveryAccessIssues}
            ${surveyDate}${surveyNote}`,
    };
  }

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
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
