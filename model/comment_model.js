/*
 * @Author: shmily_yy
 * @Date: 2024-04-17 09:42:27
 * @LastEditors: shmily_yy ml13846598527@gmail.com
 * @LastEditTime: 2024-05-28 10:56:05
 * @FilePath: /blogs-server/model/comment_model.js
 * @Description: 我的评论表
 *
 */
const User = require("./user_model");
const { DataTypes } = require("sequelize");
const seq = require("../db/seq");

// 创建模型
const Comment = seq.define(
  "comment",
  {
    content: {
      type: DataTypes.STRING, //类型
      allowNull: false, //不允许为空
      comment: "留言内容",
    },
    praise: {
      type: DataTypes.STRING, //类型
      allowNull: false, //不允许为空
      comment: "留言点赞",
    },
    userId: {
      type: DataTypes.INTEGER, //类型
      allowNull: false, //不允许为空
      comment: "用户id",
    },
    os: {
      type: DataTypes.STRING, //类型
      allowNull: false, //不允许为空
      comment: "用户系统",
    },
    Browser: {
      type: DataTypes.STRING, //类型
      allowNull: false, //不允许为空
      comment: "用户浏览器",
    },
    IP: {
      type: DataTypes.STRING, //类型
      allowNull: false, //不允许为空
      comment: "用户ip",
    },
  }
  //   {
  //     timestamps: false, // 关闭自动添加时间戳
  //   }
);

// 创建表 如果之前有直接删除
// Comment.sync({ force: true });

Comment.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Comment, { foreignKey: "userId" });

module.exports = Comment;
