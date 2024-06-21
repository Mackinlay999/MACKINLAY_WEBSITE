const dotenv = require("dotenv");
dotenv.config();
const DemoRoutes = require("express").Router();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
});

DemoRoutes.post("/demo-email", (req, res) => {
  const { fullName, phoneNumber, email, companyName, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_ID,
    to: process.env.EMAIL_ID,
    subject: "A Request for Project Demo",
    text: `Full Name: ${fullName}\nPhone Number: ${phoneNumber}\nEmail: ${email}\nCompany Name: ${companyName}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

module.exports = DemoRoutes;
