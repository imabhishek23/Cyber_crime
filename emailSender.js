require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Import cors
const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Using environment variable for email
    pass: process.env.EMAIL_PASSWORD // Using environment variable for password
  }
});

app.post('/send-email', (req, res) => {
  console.log('Received request to send email');
  const mailOptions = {
    from: process.env.EMAIL, // Sender email
    to: 'abhishekkr1082@gmail.com', // Recipient email
    subject: 'Emergency Alert',
    text: 'Emergency button clicked. Immediate assistance required!'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error); // Log the error
      return res.status(500).send(error.toString());
    }
    console.log('Email sent successfully:', info.response); // Log success
    res.send('Email sent: ' + info.response);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
