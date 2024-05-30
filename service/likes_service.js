const Likes = require("../model/likes_model");
const Blogs = require("../model/blogs_model");

/**
 * @description 切换点赞状态
 * @param {number} userId 用户ID
 * @param {number} blogId 文章ID
 * @returns {Object} 返回操作结果消息
 */
async function toggleLike(userId, blogId) {
  // 查找用户是否对该文章已有点赞记录
  const likeRecord = await Likes.findOne({ where: { userId, blogId } });

  if (likeRecord) {
    // 如果记录存在，取消点赞
    await Likes.destroy({ where: { userId, blogId } });
    await Blogs.increment("praise", { by: -1, where: { id: blogId } }); // 点赞数减1
    return { message: "取消点赞成功" };
  } else {
    // 如果记录不存在，添加点赞
    await Likes.create({ userId, blogId });
    await Blogs.increment("praise", { by: 1, where: { id: blogId } }); // 点赞数加1
    return { message: "点赞成功" };
  }
}

module.exports = { toggleLike };
