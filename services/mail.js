const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAUTH2',
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

const sendMail = (email, subject, message) => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject,
      html: message,
    };

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        // console.log('I am hit inside mail.js error message!');
        console.log(err);
        reject(err);
      } else {
        // console.log('I am hit inside mail.js with data message!');
        console.log(data);
        resolve(data);
      }
    });
  });
};

module.exports = sendMail;
