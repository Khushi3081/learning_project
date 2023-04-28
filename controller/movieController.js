const db = require('../config/connection');


const actor = db.actorInfo;
const movie = db.movieInfo;

// const addData = async(req,res)=>{
//     let info = {
//         movieName:req.body.movieName
//     }
//     try{
//         const data = await movie.create(info);
//         res.send(data);
//     }
//     catch(error) {
//         const {details} = error;
//         res.status(404).json({error:details})
//     }
// }
const getAllData = async(req,res) => {
    const movies = await movie.findAll({
        include:[{
            model:actor
        }]
    });
    try{
        res.send(movies);
    }
    catch(error) {
        const {details} = error;
        res.status(404).json({error:details})
    }
}

const updateData = async (req,res) =>{
    const id = req.params.id;
    const data = await movie.update(req.body,{
        where:{
            id:id
        }
    })
    res.send(data);
}
const deleteData = async (req,res) => {
    const id = req.params.id;
    const data = await movie.destroy({
        where: {
            id:id
        }
    })
    res.send('Data is deleted');
}
module.exports = {
    // addData,
    getAllData,
    updateData,
    deleteData
}