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
        from: `${req.body.email}`,
        to: process.env.EMAIL,
        subject: `Message from: ${req.body.name}`,
        text: `${req.body.message},
               Email Address: ${req.body.email}`
    };
   
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        res.json({
          status: 'fail',
          message: err
        });
      } else {
        console.log('Message sent');
        res.json({
          status: 'success',
          data: data
        });
      }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});