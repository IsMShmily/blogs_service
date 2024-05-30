/*
 * @Author: shmily_yy
 * @Date: 2024-04-16 22:16:51
 * @LastEditors: shmily_yy ml13846598527@gmail.com
 * @LastEditTime: 2024-04-28 11:41:05
 * @FilePath: /blogs-server/model/category_model.js
 * @Description: 文章类型表
 * 
 */
const { DataTypes } = require("sequelize");
const seq = require("../db/seq");

// 创建模型 文章类型
const Category = seq.define(
  "category",
  {
    categoryName: {
      type: DataTypes.STRING, //类型
      allowNull: false, //不允许为空
      comment: "类型名称",
    },
  }
  //   {
  //     timestamps: false, // 关闭自动添加时间戳
  //   }
);

// 创建表 如果之前有直接删除
// Category.sync({ force: true });

module.exports = Category;
