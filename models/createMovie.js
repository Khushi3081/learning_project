module.exports = (sequelize,DataTypes)=> {
    const movieinfo = sequelize.define("movieInfo",{
        movieName:{
            type:DataTypes.STRING,
            allowNull: false,
        }
    })
    return movieinfo;
}