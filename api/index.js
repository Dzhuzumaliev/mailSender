const express = require('express');
const cors = require('cors');

const mail = require('./app/mail');

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

app.use('/mails', mail);

const run = async () => {

  app.listen(PORT, () => {
    console.log(`Server started on ${PORT} port!`);
  });


};

run().catch(e => console.log(e));