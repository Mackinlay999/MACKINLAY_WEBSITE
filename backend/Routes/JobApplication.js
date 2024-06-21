const express = require('express');
const JobApplicationRoute = express.Router();
const nodemailer = require('nodemailer');
const multer = require('multer');
const dotenv = require('dotenv');
const { parsePhoneNumber } = require('libphonenumber-js');
dotenv.config();

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD
    }
});

// API route to handle job application form submission
JobApplicationRoute.post('/apply-job', upload.single('resume'), async (req, res) => {
    try {
        const { name, email, phone, appliedJob } = req.body;

        // Parse and format phone number
        let formattedPhone = phone;
        const phoneNumber = parsePhoneNumber(phone, 'IN');
        if (phoneNumber && phoneNumber.isValid()) {
            formattedPhone = phoneNumber.formatInternational();
        }

        const mailOptions = {
            from: process.env.EMAIL_ID,
            to: process.env.EMAIL_ID,
            subject: 'New Job Application',
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${formattedPhone}</p>
                <p><strong>Applied Job:</strong> ${appliedJob}</p>
            `,
            attachments: [
                {
                    filename: req.file.originalname,
                    content: req.file.buffer
                }
            ]
        };

        await transporter.sendMail(mailOptions);

        res.status(200).send({ message: 'Application submitted successfully' });
    } catch (error) {
        console.error('Error submitting application:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

module.exports = JobApplicationRoute;
