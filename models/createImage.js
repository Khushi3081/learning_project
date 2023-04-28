
module.exports = (sequelize,DataTypes) => {
    const imageInfo = sequelize.define("imageInfo",{
        imageName:{
        type:DataTypes.STRING,
        allowNull:false
        },
        imageURL : {
        type: DataTypes.STRING,
        allowNull:false
        }
    })
    return imageInfo;
}