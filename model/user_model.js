/*
 * @Author: shmily_yy
 * @Date: 2024-04-10 17:30:47
 * @LastEditors: shmily_yy ml13846598527@gmail.com
 * @LastEditTime: 2024-05-26 22:40:05
 * @FilePath: /blogs-server/model/user_model.js
 * @Description: 用户表
 * 
 */
const { DataTypes } = require("sequelize");
const seq = require("../db/seq");

// 创建模型
const User = seq.define(
  "users",
  {
    userName: {
      type: DataTypes.STRING, //类型
      allowNull: false, //不允许为空
      unique: true, //唯一
      comment: "用户名", //唯一
    },
    avatar: {
      type: DataTypes.STRING, //类型
      allowNull: false, //不允许为空
      unique: true, //唯一
      comment: "用户头像", //唯一
    },
    userType: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1, //默认值
      comment: "是否是管理员,0-管理员,1-普通用户",
    },
    email: {
      type: DataTypes.STRING, //类型
      allowNull: true, //不允许为空
      unique: true, //唯一
      defaultValue: null,
      comment: "邮箱", //唯一
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: "密码",
    },
  }
  //   {
  //     timestamps: false, // 关闭自动添加时间戳
  //   }
);

// 创建表 如果之前有直接删除
// User.sync({ force: true });

module.exports = User;
