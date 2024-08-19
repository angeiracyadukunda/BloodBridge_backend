const nodemailer = require('nodemailer');
const { emailConfig } = require('../config/config');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: emailConfig.user,
    pass: emailConfig.pass
  }
});

exports.sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: emailConfig.user,
    to,
    subject,
    text
  };

  return transporter.sendMail(mailOptions);
};
