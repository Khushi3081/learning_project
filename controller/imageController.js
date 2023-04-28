const {imageInfo,commentInfo} = require('../config/connection');

const addData = async(req,res)=>{
    try{
        const data = await imageInfo.create({
        imageName:req.body.imageName,
        imageURL:req.body.imageURL,
        commentInfos:[{
            commentName:req.body.commentName,
            commentType:req.body.commentType,
        }],
        },
        {
            include:[{
            model:commentInfo
            }]
        });
        res.send(data);
    }
    catch(error) {
        const {details} = error;
        res.status(404).json({error:details})
    }
}
const getAllData = async(req,res) => {
    try{
        // const ids = req.quer.id;
    const images = await imageInfo.findAll()
    res.send(images)
    }
    catch(error) {
        const {details} = error;
        res.status(404).json({error:details})
    }
}
const updateData = async (req,res) =>{
    const id = req.params.id;
    const data = await imageInfo.update(req.body,{
        where:{
            id:id
        }
    })
    res.send(data);
}
const deleteData = async (req,res) => {
    const id = req.params.id;
    const data = await imageInfo.destroy({
        where: {
            id:id
        }
    })
    res.send('Data is deleted');
}
module.exports = {
    getAllData,
    addData,
    updateData,
    deleteData
}