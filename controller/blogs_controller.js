const { publishGoodsError, invalidGoodsID } = require("../constant/err_type");
const {
  createGoods,
  updateGoods,
  delData,
  getData,
  getList,
} = require("../service/blogs_service");
class GoodsController {
  /**
   * 上传文章
   * @param {*} ctx
   */
  async create(ctx) {
    try {
      const res = await createGoods(ctx.request.body);
      ctx.body = {
        code: 200,
        msg: "文章上传成功",
        data: res,
      };
    } catch (error) {
      console.error(error);
      return ctx.app.emit("error", publishGoodsError, "ctx");
    }
  }

  /**
   * 修改文章
   * @param {*} ctx
   */
  async update(ctx) {
    const res = await updateGoods(ctx.request.body.id, ctx.request.body);
    if (res) {
      ctx.body = {
        code: 200,
        msg: "文章修改成功",
        data: "",
      };
    } else {
      return ctx.app.emit("error", invalidGoodsID, ctx);
    }
  }

  /**
   * 删除
   * @param {*} ctx
   * @param {*} next
   */
  async del_controller(ctx, next) {
    const id = ctx.params.id;
    const res = await delData(id);
    if (res) {
      ctx.body = {
        code: 200,
        msg: "删除成功",
      };
    } else {
      ctx.app.emit("error", delError, ctx);
    }
  }

  /**
   * 根据id获取数据
   * @param {*} ctx
   * @param {*} next
   */
  async getData_controller(ctx, next) {
    const id = ctx.query.id;
    let userId;
    if (ctx.query.userId) {
      userId = ctx.query.userId;
    } else {
      userId = null;
    }
    try {
      const res = await getData({ id, userId });
      console.log("res", res);
      if (res) {
        ctx.body = {
          code: 200,
          msg: "获取数据成功",
          data: res,
        };
      } else {
        ctx.body = {
          code: 404,
          msg: "查询失败",
          data: res,
        };
      }
    } catch (error) {
      console.error("获取数据失败", error);
    }
  }

  /**
   * 分页获取列表数据
   * @param {*} ctx
   * @param {*} next
   */
  async getList_controller(ctx, next) {
    const { page, size, categoryId, userId } = ctx.request.body;
    try {
      const res = await getList(page, size, categoryId, userId);
      ctx.body = {
        code: 200,
        msg: "获取数据成功",
        data: res,
      };
    } catch (error) {
      {
        console.error("分页获取列表失败", error);
      }
    }
  }
}

module.exports = new GoodsController();
