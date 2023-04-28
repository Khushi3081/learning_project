const {commentInfo} = require('../config/connection');

const getAllData = async(req,res) => {
    try{
         const type = req.query.type;
    const images = await commentInfo.findAll({
        where:[{
            commentType:type
        }]
    })
    res.send(images)
    }
    catch(error) {
        const {details} = error;
        res.status(404).json({error:details})
    }
}
const updateData = async (req,res) =>{
    const id = req.params.id;
    const data = await commentInfo.update(req.body,{
        where:{
            id:id
        }
    })
    res.send(data);
}
const deleteData = async (req,res) => {
    const id = req.params.id;
    const data = await commentInfo.destroy({
        where: {
            id:id
        }
    })
    res.send('Data is deleted');
}
module.exports = {
    getAllData,
    updateData,
    deleteData
}