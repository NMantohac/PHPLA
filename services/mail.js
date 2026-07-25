const google = require('googleapis');
const Gmail = google.gmail_v1.Gmail;

const oauth2Client = new google.Auth.OAuth2Client(
  process.env.OAUTH_CLIENTID,
  process.env.OAUTH_CLIENT_SECRET,
);

// Set the credentials using my playground refresh token
oauth2Client.setCredentials({
  refresh_token: process.env.OAUTH_REFRESH_TOKEN,
});

const gmail = new Gmail({ auth: oauth2Client });
// const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

// Constructs the raw RFC 2822 email headers and body
  // Note: 'from' header tells Gmail who the sender claims to be, 
  // but Gmail API 'me' will send it from your authenticated account.
const sendMail = async (email, subject, message) => {
  const str = [
    `From: ${email}`,
    `To: ${process.env.EMAIL}`,
    `Subject: ${subject}`,
    'Content-Type: text/html; charset=utf-8',
    'MIME-Version: 1.0',
    '',
    message
  ].join('\r\n');

  // Encode the string into web-safe Base64 as required by Google API
  const encodedMessage = Buffer.from(str)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  try {
    // Send the mail via HTTP REST call
    const response = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage,
      },
    });
    
    // Return or log success data if needed
    return response.data;
  } catch (err) {
    // Replaces your old callback error logic
    console.error('Error inside mail.js API request:', err);
  }
};

module.exports = sendMail;

// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   name: process.env.WEBSITE,
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   service: 'gmail',
//   auth: {
//     type: 'OAUTH2',
//     user: process.env.EMAIL,
//     clientId: process.env.OAUTH_CLIENTID,
//     clientSecret: process.env.OAUTH_CLIENT_SECRET,
//     refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//   },
// });

// const sendMail = async (email, subject, message) => {
//   const mailOptions = {
//     from: email,
//     to: process.env.EMAIL,
//     subject,
//     html: message,
//   };

//   try {
//     await transporter.sendMail(mailOptions, (err) => {
//       if (err) {
//         // console.log('I am hit inside mail.js error message!');
//         console.log(err);
//       }
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// module.exports = sendMail;
