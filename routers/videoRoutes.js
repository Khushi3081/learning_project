const videoData = require("../controller/videoController");
const express = require("express");
const app = express();
const {validate} = require('../middleware/validation');

app.post('/addData',videoData.addData);
app.get('/getAllData',videoData.getAllData);
app.put('/:id',validate,videoData.updateData);
app.delete('/:id',videoData.deleteData);


module.exports = app;