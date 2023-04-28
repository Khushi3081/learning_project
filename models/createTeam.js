// const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) =>{
    const teaminfo = sequelize.define("teamInfo", {
        teamName: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        noOfPlayer: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        teamType: {
        type: DataTypes.STRING,
        allowNull: false,
        }
     })
     return teaminfo;
}