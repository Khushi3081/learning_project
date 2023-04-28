const teamData = require('../controller/teamController');
const express = require('express');
const app = express();

app.post('/add_Data',teamData.addData);
app.get('/get_All_Data', teamData.getAllData);
app.get('/get_One_Data', teamData.getOneData);
app.put('/:id',teamData.updateData);
app.delete('/:id',teamData.deleteData);

module.exports = app;
