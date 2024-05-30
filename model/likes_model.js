const { DataTypes } = require("sequelize");
const seq = require("../db/seq");
const Users = require("./user_model");
const Blogs = require("./blogs_model");
const User = require("./user_model");

const Likes = seq.define(
  "likes",
  {
    // 用户ID，关联用户表
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "用户ID",
      references: {
        model: Users,
        key: "id",
      },
    },
    // 文章ID，关联文章表
    blogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "文章ID",
      references: {
        model: Blogs,
        key: "id",
      },
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["userId", "blogId"],
      },
    ],
  }
);
// 创建表 如果之前有直接删除
// Likes.sync({ force: true });

// 一个用户可以有多个点赞
Users.hasMany(Likes, { foreignKey: "userId" });
// 每个点赞记录属于一个用户
Likes.belongsTo(Users, { foreignKey: "userId" });

// 一篇文章可以有多个点赞
Blogs.hasMany(Likes, { foreignKey: "blogId" });
// 每个点赞记录属于一篇文章
Likes.belongsTo(Blogs, { foreignKey: "blogId" });

module.exports = Likes;
