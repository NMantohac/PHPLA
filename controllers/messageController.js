const sendMail = require('../services/mail');

module.exports = {
  sendMessage: async (req, res) => {
    const { formFirstName, formLastName, formEmail, formPhone, formSubject, formMessage } = req.body;
    const message = `
      <p>PHPLA Website: You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${formFirstName} ${formLastName}</li>
        <li>Email: ${formEmail}</li>
        <li>Phone: ${formPhone}</li>
      </ul>
      <h3>Subject</h3>
      <p>${formSubject}</p>
      <h3>Message</h3>
      <p>${formMessage}</p>
      `;

    console.log('Data: ', req.body);

    try {
      const { data } = await sendMail(formEmail, formSubject, message);
      // console.log('I am hit with a data message!');
      return res.status(200).json({ message: 'Email Sent', data });
    } catch (e) {
      // console.log('I am hit with an error message!');
      return res.status(500).json({ e });
    }
  },
};
