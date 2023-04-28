

module.exports = (sequelize,DataTypes)=> {
    const playerinfo = sequelize.define("playerInfo",{
        playerName:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        playerEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        playerAge: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        playerGame: {
            type:DataTypes.STRING,
            allowNull:false
        }
    })
    return playerinfo;
}
