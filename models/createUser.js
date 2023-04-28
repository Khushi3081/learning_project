const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");
const bcrypt = require('bcrypt');
module.exports = (sequelize,DataTypes) =>{
    const userInfo = sequelize.define('userInfo',{
        userName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        userPassword:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }, {
    hooks: {
        beforeCreate:async(userInfo,options) => {
            const password = await bcrypt.hash(userInfo.userPassword,10);
            userInfo.userPassword = password;
        }
    }
})
return userInfo;
}