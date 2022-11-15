const nodemailer = require('nodemailer');
const config = require('./config');

const sendMail = async options => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: config.mailServerOptions.auth.user,
      pass: config.mailServerOptions.auth.pass
    }
  });

  return transporter.sendMail(options);
};

module.exports = sendMail;