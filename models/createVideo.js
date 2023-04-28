
module.exports = (sequelize,DataTypes) => {
    const videoInfo = sequelize.define("videoInfo",{
        videoName:{
        type:DataTypes.STRING,
        allowNull:false
        },
        videoType : {
        type: DataTypes.STRING,
        allowNull:false
        }
    })
    return videoInfo;
}