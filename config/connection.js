const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("associate_db", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("connected!");
} catch (error) {
  console.log("unable to connect:::", error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//apply one to many 
db.teamInfo = require("../models/createTeam")(sequelize, DataTypes);
db.playerInfo = require("../models/createPlayer")(sequelize, DataTypes);

//apply many to many
db.movieInfo = require("../models/createMovie.js")(sequelize,DataTypes);
db.actorInfo = require("../models/createActor.js")(sequelize,DataTypes);

//apply one to many polymorphic
db.imageInfo = require("../models/createImage.js")(sequelize,DataTypes);//image(1):comment(n) && video(1):comment(n) 
db.videoInfo = require("../models/createVideo.js")(sequelize,DataTypes);//multiple comment table so use polymorphic for create one comment table
db.commentInfo = require("../models/createComment.js")(sequelize,DataTypes);

 db.userInfo = require("../models/createUser")(sequelize,DataTypes);
sequelize.sync();

try {
  db.teamInfo.hasMany(db.playerInfo);
  db.playerInfo.belongsTo(db.teamInfo);   

  db.movieInfo.belongsToMany(db.actorInfo, {through:'actorMovies'}) 
  db.actorInfo.belongsToMany(db.movieInfo, {through:'actorMovies'}) 

  // db.imageInfo.hasMany(db.commentInfo,{
  //   foreignKey:"commentTableId",
  //   constraints:true,
  //   scope:{
  //     commentType:'image'
  //   }
  // });
  //   db.videoInfo.hasMany(db.commentInfo,{
  //     foreignKey:"commentTableId",
  //     constraints:true,
  //     scope:{
  //       commentType:'video'
  //     }
  // });
  // db.commentInfo.belongsTo(db.imageInfo,{
  //   foreignKey:"commentTableId",
  //   constraints:true
  // });
  // db.commentInfo.belongsTo(db.videoInfo,{
  //   foreignKey:"commentTableId",
  //   constraints:true
  // });

  db.imageInfo.hasMany(db.commentInfo, {
    foreignKey: 'commentableId',
    constraints: false,
    });
  db.commentInfo.belongsTo(db.imageInfo, { foreignKey: 'commentableId', constraints: false });
  
  db.videoInfo.hasMany(db.commentInfo, {
    foreignKey: 'commentableId',
    constraints: false,
    });
  db.commentInfo.belongsTo(db.videoInfo, { foreignKey: 'commentableId', constraints: false });
  
  db.sequelize.sync();
  
  console.log("resync-done");
} catch (error) {
  console.log("=>", error);
}

db.actorInfo.addScope('showactor',{
  include:{
    model:db.movieInfo
  }
})

db.actorInfo.addScope('getOneData',{
  where:[{
    id:8
  }]
})

db.commentInfo.addScope('imageinfo',{
  where:[{
    commentType: 'image'
  }]
})
db.commentInfo.addScope('videoinfo',{
  where:[{
    commentType: 'video'
  }]
})
module.exports = db;
