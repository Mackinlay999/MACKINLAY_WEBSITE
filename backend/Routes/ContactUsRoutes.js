const dotenv = require("dotenv");
dotenv.config();
const ContactUsRoutes = require("express").Router();
const nodemailer = require("nodemailer");

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// API endpoint to send email
ContactUsRoutes.post("/send-email", (req, res) => {
  const { product, name, email, phone, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_ID,
    to: process.env.EMAIL_ID,
    subject: `Contact Form Submission from ${name}`,
    text: `
            Product: ${product}
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
        `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() });
    }
    res.status(200).json({ message: "Email sent successfully", info });
  });
});

module.exports = ContactUsRoutes
