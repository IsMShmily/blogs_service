const {
  createUser,
  getuserinfo,
  updateByIdUser,
  delUser,
  getUserInfoList,
} = require("../service/user_service");
const { userRegisterError, delError } = require("../constant/err_type");
const { JWT_SELECT } = require("../config/index");
const jwt = require("jsonwebtoken");
const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = require("../config");
const axios = require("axios");
class UserController {
  // 注册
  async createUser_controller(ctx, next) {
    const { password, userName, userType, email } = ctx.request.body;
    try {
      const res = await createUser({
        password,
        userName: email,
        userType,
        email,
        avatar: "http://localhost:8000/avatar.png",
      });
      ctx.body = {
        code: 200,
        msg: "注册成功",
        data: {
          userName,
          id: res.id,
        },
      };
    } catch (error) {
      ctx.app.emit("error", userRegisterError, ctx);
      return;
    }
  }

  // 登录
  async login(ctx, next) {
    const { email } = ctx.request.body;
    try {
      const { password, ...res } = await getuserinfo({ email });
      ctx.body = {
        code: 200,
        msg: "登录成功",
        data: {
          ...res,
          token: jwt.sign({ res }, JWT_SELECT, { expiresIn: "1d" }),
        },
      };
    } catch (error) {
      console.error("用户登录失败", error);
    }
  }
  // github登录
  async githubLogin(ctx, next) {
    const { code } = ctx.request.body;
    try {
      // 获取 GitHub 访问令牌
      const tokenResponse = await axios.post(
        "https://github.com/login/oauth/access_token",
        {
          client_id: GITHUB_CLIENT_ID,
          client_secret: GITHUB_CLIENT_SECRET,
          code,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      const accessToken = tokenResponse.data.access_token;

      // 使用访问令牌获取用户信息
      const userResponse = await axios.get("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const user = userResponse.data;
      const res = await getuserinfo({ email: user.email });
      if (res) {
        ctx.body = {
          code: 200,
          msg: "登录成功",
          data: {
            ...res,
            token: jwt.sign({ res }, JWT_SELECT, { expiresIn: "1d" }),
          },
        };
      } else {
        await createUser({
          password: "123456",
          userName: user.email,
          userType: 1,
          email: user.email,
          avatar: user.avatar_url,
        });
        const { password, ...res } = await getuserinfo({ email: user.email });
        ctx.body = {
          code: 200,
          msg: "登录成功",
          data: {
            ...res,
            token: jwt.sign({ res }, JWT_SELECT, { expiresIn: "1d" }),
          },
        };
      }
    } catch (error) {
      console.error(error);
      ctx.body = { success: false, error: error.message };
    }
  }
  // 修改用户密码
  async changePassword(ctx, next) {
    const id = ctx.request.body.id;
    const { password, userName, userType, nickName, email, phone, sex } =
      ctx.request.body;
    if (
      await updateByIdUser({
        id,
        password,
        userName,
        userType,
        nickName,
        email,
        phone,
        sex,
      })
    ) {
      return (ctx.body = {
        code: 200,
        msg: "修改成功",
      });
    } else {
      return (ctx.body = {
        code: "10007",
        msg: "修改密码失败",
        data: "",
      });
    }
  }

  // 修改用户信息
  async changeUserInfo(ctx, next) {
    const id = ctx.request.body.id;
    const { password, userName, userType, nickName, email, phone, sex } =
      ctx.request.body;
    if (
      await updateByIdUser({
        id,
        password,
        userName,
        userType,
        nickName,
        email,
        phone,
        sex,
      })
    ) {
      return (ctx.body = {
        code: 200,
        msg: "修改成功",
      });
    } else {
      return (ctx.body = {
        code: "10007",
        msg: "修改密码失败",
        data: "",
      });
    }
  }
  /**
   * 删除用户
   * @param {*} ctx
   * @param {*} next
   */
  async delUser_controller(ctx, next) {
    const id = ctx.params.id;
    const res = await delUser(id);
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
   * 根据id获取用户信息
   * @param {*} ctx
   * @param {*} next
   */
  async getUserinfo_controller(ctx, next) {
    const id = ctx.params.id;
    try {
      const res = await getuserinfo({ id });
      ctx.body = {
        code: 200,
        msg: "获取用户信息成功",
        data: res,
      };
    } catch (error) {
      console.error("获取用户信息失败", error);
    }
  }

  /**
   * 分页获取用户信息
   * @param {*} ctx
   * @param {*} next
   */
  async getUserInfoList_controller(ctx, next) {
    const { page, size } = ctx.request.body;
    console.log(page, size);
    try {
      const res = await getUserInfoList(page, size);
      ctx.body = {
        code: 200,
        msg: "获取用户信息成功",
        data: res,
      };
    } catch (error) {
      {
        console.error("分页获取用户信息失败", error);
      }
    }
  }
}

module.exports = new UserController();
