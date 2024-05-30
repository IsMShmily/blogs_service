const { goodsFormatError } = require("../constant/err_type");

/**
 * @description 验证文章参数 
 * @param {*} ctx
 * @param {*} next
 * @return {*}
 */
const validator = async (ctx, next) => {
  try {
    ctx.verifyParams({
      title: { type: "string", required: true },
      praise: { type: "number", required: true },
      brief: { type: "string", required: true },
      thumbnail: { type: "string", required: true },
      description: { type: "string", required: true },
      categoryId: { type: "string", required: true },
    });
  } catch (error) {
    console.error("err", error);
    goodsFormatError.data = error;
    return ctx.app.emit("error", goodsFormatError, ctx);
  }
  await next();
};

module.exports = {
  validator,
};
