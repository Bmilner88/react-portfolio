const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');
require('dotenv').config();

const port = 3001;

app.use(express.json());
app.use(cors());

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

transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`Server is ready to take messages: ${success}`)
});

app.post('/send', function (req, res) {
    let mailOptions = {
        from: `${req.body.formState.email}`,
        to: process.env.EMAIL,
        subject: `Message from: ${req.body.formState.email}`,
        text: `${req.body.formState.message}`
    };
   
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Email sent successfully');
        res.json({ status: 'Email sent' });
      }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});