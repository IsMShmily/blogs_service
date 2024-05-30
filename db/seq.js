const { Sequelize } = require("sequelize");

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB,
  MYSQL_PORT
} = require("../config/index");

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  port:MYSQL_PORT,
  dialect: "mysql",
});

// seq
//   .authenticate()
//   .then(() => {
//     console.log("连接成功");
//   })
//   .catch((err) => {
//     console.log("失败", err);
//   });

module.exports = seq;
