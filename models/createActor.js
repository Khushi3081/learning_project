module.exports = (sequelize,DataTypes)=> {
    const actorinfo = sequelize.define("actorInfo",{
        actorName:{
            type:DataTypes.STRING,
            allowNull: false,
        }
    })
    return actorinfo;
}