const bcrypt = require("bcryptjs");
const redis = require("../db/redis");

const { getuserinfo } = require("../service/user_service");
const {
  userFormateError,
  userAlreadyExited,
  userRegisterError,
  userDoesNotExist,
  userLoginError,
  invalidPassword,
  userEmailFormateError,
  EmailCodeNull,
  EmaillCodeError,
  githubCodeError
} = require("../constant/err_type");

/**
 * 验证邮箱、密码不为空
 * @param {*} ctx
 * @param {*} next
 * @returns
 */
const userMiddleware = async (ctx, next) => {
  const { email, password } = ctx.request.body;
  try {
    if (!email || !password) {
      console.error("邮箱或密码不能为空", ctx.request.body);
      ctx.app.emit("error", userFormateError, ctx);
      return;
    }
    await next();
  } catch (error) {
    console / log(error);
    ctx.app.emit("error", userRegisterError, ctx);
    return;
  }
};

/**
 * 验证github code 是否存在
 * @param {*} ctx
 * @param {*} next
 * @returns
 */
const userGithubMiddleware = async (ctx, next) => {
  const { code } = ctx.request.body;
  try {
    if (!code) {
      console.error("error github code is null", ctx.request.body);
      ctx.app.emit("error", githubCodeError, ctx);
      return;
    }
    await next();
  } catch (error) {
    console / log(error);
    ctx.app.emit("error", githubCodeError, ctx);
    return;
  }
};

/**
 * @description: 校验邮箱与验证码是否匹配
 * @param {*} ctx
 * @param {*} next
 * @return {*}
 */
const verifyEmailAndCode = async (ctx, next) => {
  const { email, code } = ctx.request.body;
  try {
    if (!email || !code) {
      console.error("邮箱或验证码不能为空", ctx.request.body);
      ctx.app.emit("error", userEmailFormateError, ctx);
      return;
    }
    const redisCode = await redis.get(`code:${email}`);
    if (!redisCode) {
      console.error("验证码已过期或不存在", ctx.request.body);
      ctx.app.emit("error", EmailCodeNull, ctx);
      return;
    }
    if (redisCode !== code) {
      console.error("验证码不匹配", ctx.request.body);
      ctx.app.emit("error", EmaillCodeError, ctx);
      return;
    }
    await next();
  } catch (error) {
    console.error("校验邮箱与验证码是否匹配错误：", error);
    ctx.app.emit("error", userEmailFormateError, ctx);
    return;
  }
};

/**
 * 验证邮箱是否存在
 * @param {*} ctx
 * @param {*} next
 * @returns
 */
const verifyEmail = async (ctx, next) => {
  const { email } = ctx.request.body;
  try {
    if (await getuserinfo({ email })) {
      ctx.app.emit("error", userAlreadyExited, ctx);
      return;
    }
    await next();
  } catch (error) {
    console.error("密码不能为空", error);
    ctx.app.emit("error", userRegisterError, ctx);
    return;
  }
};

/**
 * bcrypt加密 - 对password进行加密并传递给下一个中间件
 * @param {*} ctx
 * @param {*} next
 */
const bcryptPassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    ctx.request.body.password = hash;
    await next();
  } catch (error) {
    console.error("加密错误", error);
    ctx.app.emit("error", userRegisterError, ctx);
  }
};

/**
 * 根据用户名 校验 用户是否存在、密码是否正确
 * @param {*} ctx
 * @param {*} next
 */
const verifyLogin = async (ctx, next) => {
  const { email, password } = ctx.request.body;
  try {
    const res = await getuserinfo({ email });
    if (!res) {
      console.error("用户不存在", ctx.request.body);
      ctx.app.emit("error", userDoesNotExist, ctx);
      return;
    }
    // 密码是否正确
    const isPasswordRight = bcrypt.compareSync(password, res.password);
    if (isPasswordRight === false) {
      ctx.app.emit("error", invalidPassword, ctx);
      return;
    }
    await next();
  } catch (error) {
    console.error("校验用户信息错误", error);
    ctx.app.emit("error", userLoginError, ctx);
  }
};

module.exports = {
  userMiddleware,
  verifyEmail,
  bcryptPassword,
  verifyLogin,
  verifyEmailAndCode,
  userGithubMiddleware
};
