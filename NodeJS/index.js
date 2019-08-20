const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db');
var contactController = require('./controllers/contactController');
var signupController = require('./controllers/signupController');
var loginController = require('./controllers/loginController');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server started at port : ' + PORT));

app.use('/contacts', contactController);
app.use('/signup', signupController);
app.use('/login', loginController);