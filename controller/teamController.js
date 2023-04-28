const db = require('../config/connection');
const team = db.teamInfo;
const player = db.playerInfo;

const addData = async(req,res)=> {
    // console.log('>>>>>>>>>>>>>',req.method,req.url);
    
        let info = {
            teamName:req.body.teamName,
            noOfPlayer:req.body.noOfPlayer,
            teamType:req.body.teamType
        }
        const data = await team.create(info);
        res.json(data);
    }
    
    const getAllData = async(req,res) => {
        const teams = await team.findAll({
            include:[{
                model:player
            }]
        });
        res.send(teams);
    }
    
    const getOneData = async(req,res) => {
        const id = req.query.id;
        const teamOne = await team.findAll({
            where:{
                id:id
            }
        })
        res.send(teamOne);
    }
    
    const updateData = async (req,res) =>{
        const id = req.params.id;
        const data = await team.update(req.body,{
            where:{
                id:id
            }
        })
        res.send(data);
    }
    
    const deleteData = async (req,res) => {
        const id = req.params.id;
        const data = await team.destroy({
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