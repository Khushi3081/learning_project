const userData = require('../controller/userController');
const express = require('express');
const app = express();

app.post('/addData',userData.addData);
module.exports = app;