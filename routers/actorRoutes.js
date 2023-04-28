const actorData = require("../controller/actorController");
const express = require("express");
const app = express();
const {validate,validateData} = require('../middleware/validation');

app.post('/addData',validateData,actorData.addData);
app.get('/getAllData',actorData.getAllData);
app.put('/:id',validate,actorData.updateData);
app.delete('/:id',actorData.deleteData);


module.exports = app;