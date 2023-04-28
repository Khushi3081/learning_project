const express = require('express');
const app = express();
const port = 4040;
const bodyParser=require('body-parser')
require('./config/connection');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const router = require('../sequelize/routers/playerRoutes');
const routers = require('../sequelize/routers/teamRoute');

const actorRoutes = require('./routers/actorRoutes');
const movieRoutes = require('./routers/movieRoutes');

const imageRoutes = require('./routers/imageRoutes');
const videoRoutes = require('./routers/videoRoutes');
const commentRoutes = require('./routers/commentRoutes');

const userRoutes = require('./routers/userRoutes');


app.use('/api',router);
app.use('/',routers);

app.use('/actor',actorRoutes);
app.use('/movie',movieRoutes);


app.use('/image',imageRoutes);
app.use('/video',videoRoutes);
app.use('/comment',commentRoutes);

app.use('/user',userRoutes);
// require('./models')
// const {user,edu} = require('./controller/addData');
//  const {userData,eduData} = require('./models/createTable');
// const db = require('./config/connection');
// const player = db.playerInfo;
// const team = db.teamInfo;


// app.get('/oneToOne',async(req,res)=>{
//     let data = await userData.findAll({
//         include:[{
//             model:eduData
//         }],
//         where: {
//             id:1
//         },
//     });
//     res.send(data);
// })

// app.get('/oneToMany',async(req,res)=>{
//     let data = await playerInfo.findAll({
//         include:[{
//             model:teamInfo
//         }],
//         where: {
//             id:1
//         },
//     });
//     res.send(data);
// })

app.listen(port, (req,res)=> {
    console.log("connected successfully");
});