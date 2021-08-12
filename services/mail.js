const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  name: process.env.EMAIL,
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

const sendMail = async (email, subject, message) => {
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject,
    html: message,
  };

  try {
    await transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        // console.log('I am hit inside mail.js error message!');
        console.log(err);
      } else {
        console.log(data);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = sendMail;
