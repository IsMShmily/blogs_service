const jwt = require("jsonwebtoken");
const { JWT_SELECT } = require("../config/index");
const {
  tokenExpiredError,
  invalidToken,
  hasNotAdminPermission,
} = require("../constant/err_type");

/**
 * 校验token是否过期
 * @param {*} ctx
 * @param {*} next
 */
const auth = async (ctx, next) => {
  const { token } = ctx.request.header;
  try {
    const user = jwt.verify(token, JWT_SELECT);
    ctx.state.user = user;
  } catch (error) {
    switch (error.name) {
      case "TokenExpiredError":
        console.error("token过期", error);
        return ctx.app.emit("error", tokenExpiredError, ctx);
      case "JsonWebTokenError":
        console.error("无效token", error);
        return ctx.app.emit("error", invalidToken, ctx);
    }
  }
  await next();
};

/**
 * 是否为管理员
 * @param {*} ctx
 * @param {*} next
 */
const hadAdminPermission = async (ctx, next) => {
  const { userType } = ctx.state.user.res;
  if (userType) {
    console.error("该用户没有管理员权限", ctx.state.user);
    return ctx.app.emit("error", hasNotAdminPermission, ctx);
  }
  await next();
};

module.exports = {
  auth,
  hadAdminPermission,
};
