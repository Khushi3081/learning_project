const commentData = require("../controller/commentController");
const express = require("express");
const app = express();
const {validate} = require('../middleware/validation');

app.get('/getAllData',commentData.getAllData);
app.put('/:id',validate,commentData.updateData);
app.delete('/:id',commentData.deleteData);


module.exports = app;