const { emailError } = require("../constant/err_type");

/**
 * 验证邮箱是否正确
 * @param {*} ctx
 * @param {*} next
 * @returns
 */
const emailMiddleware = async (ctx, next) => {
  const { email } = ctx.request.body;
  try {
    if (!email) {
      console.error("邮箱验证错误", ctx.request.body);
      ctx.app.emit("error", emailError, ctx);
      return;
    }
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!reg.test(email)) return ctx.app.emit("error", emailError, ctx);
    await next();
  } catch (error) {
    ctx.app.emit("error", emailError, ctx);
    return;
  }
};

module.exports = {
  emailMiddleware,
};
