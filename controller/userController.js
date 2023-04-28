const {userInfo} = require('../config/connection');

const addData = async(req,res)=>{
    try{
        const data = await userInfo.create({
        userName:req.body.userName,
        userPassword:req.body.userPassword,
        });
        res.send(data);
    }
    catch(error) {
        res.status(404).json({error:error.message})
    }
}
module.exports = {addData};