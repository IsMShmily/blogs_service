const { delError } = require("../constant/err_type");
const useragent = require("useragent");
const {
  createData,
  delData,
  getData,
  getList,
  updateByIdData,
} = require("../service/comment_service");

class commentController {
  /**
   * 添加
   * @param {*} ctx
   * @param {*} next
   */
  async add_controll(ctx, next) {
    const { id } = ctx.state.user.res;
    const { content } = ctx.request.body;
    const userAgentString = ctx.request.headers["user-agent"];
    const clientIp = ctx.request.ip;
    const userAgent = useragent.parse(userAgentString);
    try {
      const res = await createData({
        content,
        userId: id,
        praise: 0,
        os: userAgent.os.family,
        Browser: userAgent.toAgent(),
        IP: clientIp,
      });
      if (res) {
        ctx.body = {
          code: 200,
          msg: "添加成功",
          data: true,
        };
      }
    } catch (error) {
      console.log("error", error);
      ctx.app.emit(
        "error",
        {
          code: "10301",
          msg: "添加失败",
          data: "",
        },
        ctx
      );
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
    const id = ctx.params.id;
    try {
      const res = await getData({ id });
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
    const { page, size } = ctx.request.body;
    try {
      const res = await getList(page, size);
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
  /**
   * 修改
   * @param {*} ctx
   * @param {*} next
   * @returns
   */
  async updateData(ctx, next) {
    const id = ctx.request.body.id;
    const { categoryName } = ctx.request.body;
    if (
      await updateByIdData({
        categoryName,
        id,
      })
    ) {
      return (ctx.body = {
        code: 200,
        msg: "修改成功",
      });
    } else {
      return (ctx.body = {
        code: "10007",
        msg: "修改数据失败",
        data: "",
      });
    }
  }
}

module.exports = new commentController();
