const { toggleLike } = require("../service/likes_service");

class LikesController {
  /**
   * @description 处理点赞和取消点赞请求
   * @param {Object} ctx
   */
  async handleLike(ctx) {
    const { id: userId } = ctx.state.user.res;
    const { blogId } = ctx.request.body;

    try {
      const result = await toggleLike(userId, blogId);
      ctx.body = {
        code: 200,
        msg: result.message,
        data: null,
      };
    } catch (error) {
      console.error("点赞操作失败", error);
      ctx.body = {
        code: 500,
        msg: "点赞操作失败",
        data: null,
      };
    }
  }
}

module.exports = new LikesController();
