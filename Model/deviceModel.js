let creatDB = require('../public/SqlDB');
const sequelize = require('sequelize');

let Sequelize=creatDB.creatSQL('库名');  //指定数据库


let soundbox=Sequelize.define('表名',{ //构建数据模型
    id:{
        type:sequelize.BIGINT(20),
        primaryKey:true
    },
    deviceid:sequelize.STRING(32),
    userid:sequelize.BIGINT(11),
    username:sequelize.STRING(32),
    schoolid:sequelize.BIGINT(11),
    devicetype:sequelize.BIGINT(11),
    regdate:sequelize.DATE
},{
    freezeTableName: true,
    timestamps: false,
});


module.exports = {
    soundbox,
};
