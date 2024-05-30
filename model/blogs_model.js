/*
 * @Author: shmily_yy
 * @Date: 2024-04-16 12:16:25
 * @LastEditors: shmily_yy ml13846598527@gmail.com
 * @LastEditTime: 2024-05-28 14:52:07
 * @FilePath: /blogs-server/model/blogs_model.js
 * @Description: 博客表
 *
 */
const { DataTypes } = require("sequelize");
const seq = require("../db/seq");

// 创建模型
const Blogs = seq.define(
  "blogs",
  {
    title: {
      type: DataTypes.STRING, //类型
      allowNull: false, //不允许为空
      comment: "文章标题",
    },
    brief: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "文章简介",
    },
    praise: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "文章点赞",
    },
    browse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "文章浏览量",
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "文章缩率图",
    },
    description: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      comment: "文章详情",
    },
    categoryId: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "类别Id",
    },
  }
  //   {
  //     timestamps: false, // 关闭自动添加时间戳
  //   }
);

// 创建表 如果之前有直接删除
// Blogs.sync({ force: true });

module.exports = Blogs;
