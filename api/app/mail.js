const express = require('express');
const config = require('../config');
const sendMail = require('../sendMail');

const router = express.Router();

router.post('/', async (req, res) => {
  const {message} = req.body;

  const mailOptions = {
    from: config.mailServerOptions.auth.user,
    to: "juzumaliev@gmail.com",
    subject: "Nodemailer Test",
    text: message,
  };

  try {
    await sendMail(mailOptions);

    res.send("mail sent");
  } catch (e) {
    res.sendStatus(400);
  }
});

module.exports = router;