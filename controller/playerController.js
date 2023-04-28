const db = require('../config/connection');
const express= require('express');
const app = express();


const {faker} = require('@faker-js/faker');
// const team = table.team;
const player = db.playerInfo;
const team = db.teamInfo;
// async function addPlayerData() {
//     const addData = await player.create({
//         playerName:faker.name.fullName(),
//         playerEmail:faker.internet.email(),
//         playerAge:faker.datatype.number(),
//         playerGame:"cricket",
//         createdAt:faker.date.between() ,
//         updatedAt:faker.date.between(),
//   })
// }
// // (async()=>{
// //     for(let i=1;i<2;i++){
// //      await addPlayerData()[i];
// //     }
// // })()


const addData = async(req,res)=> {
    let info = {
        playerName:req.body.playerName,
        playerEmail:req.body.playerEmail,
        playerAge:req.body.playerAge,
        playerGame:req.body.playerGame,
        teamInfoId:req.body.teamInfoId
        // createdAt:now(),
        // updatedAt:now(),
    }
    const data = await player.create(info);
     res.send(data);
}

const getAllData = async(req,res) => {
    const players = await player.findAll({
        include:[{
            model:team
        }]
    });
    res.send(players);
}

const getOneData = async(req,res) => {
    const id = req.query.id;
    const playerOne = await player.findAll({
        where:{
            id:id
        }
    })
    res.send(playerOne);
}

const updateData = async (req,res) =>{
    const id = req.params.id;
    const data = await player.update(req.body,{
        where:{
            id:id
        }
    })
    res.send(data);
}

const deleteData = async (req,res) => {
    const id = req.params.id;
    const data = await player.destroy({
        where: {
            id:id
        }
    })
    res.send('Data is deleted');
}
module.exports = {
    
    addData,
    getAllData,
    getOneData,
    updateData,
    deleteData
}