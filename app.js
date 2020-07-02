const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');

const app = express();

const port = process.env.PORT;

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


// ROUTES
app.use('/sendtome', require('./routes/sendToMe'))




app.get("/", (req, res) => {
  res.send("Welcome the email api")
})





app.listen(port, () => {
  console.log(`We're up and running on ${ port }`);
})
