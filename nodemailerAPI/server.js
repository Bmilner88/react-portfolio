const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
require("dotenv").config();

const port = 3001;

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.USER,
        pass: process.env.PASS,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
});

let mailOptions = {
    from: process.env.USER,
    to: process.env.EMAIL,
    subject: 'Nodemailer API Test',
    text: 'This is a test for nodemailer'
};

transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`Server is ready to take messages: ${success}`)
});

/* transporter.sendMail(mailOptions, (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Email sent successfully');
    };
}); */

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});