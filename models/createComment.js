
module.exports = (sequelize,DataTypes) => {
    const commentInfo = sequelize.define("commentInfo",{
        commentName:{
        type:DataTypes.STRING,
        allowNull:false
        },
        commentType : {
        type: DataTypes.STRING,
        allowNull:false
        },
        // commentTableId: {
        //     type:DataTypes.INTEGER,
        //     allowNull:false
        // }
    })
    return commentInfo;
}