/*
 * @Date: 2024-04-10 13:20:36
 * @LastEditTime: 2024-05-29 22:34:59
 * @FilePath: /blogs-server/routes/users_route.js
 * @Description: 用户路由
 *
 */
const router = require("koa-router")();
router.prefix("/user");
const {
  userMiddleware,
  verifyEmail,
  bcryptPassword,
  verifyLogin,
  verifyEmailAndCode,
  userGithubMiddleware,
} = require("../middleware/user_middleware");

const { auth, hadAdminPermission } = require("../middleware/auth_middleware");

const {
  createUser_controller,
  login,
  changePassword,
  getUserinfo_controller,
  delUser_controller,
  getUserInfoList_controller,
  changeUserInfo,
  githubLogin
} = require("../controller/user_controller");

// 注册
router.post(
  "/registered",
  userMiddleware,
  verifyEmail,
  verifyEmailAndCode,
  bcryptPassword,
  createUser_controller
);
// 登录
router.post("/login", userMiddleware, verifyLogin, login);
// github 登录
router.post("/auth/github", userGithubMiddleware, githubLogin);
// 注册必填密码
router.post("/updateUser", auth, bcryptPassword, changePassword);
// 修改用户信息
router.post("/updateUserinfo", auth, changeUserInfo);
// 根据id获取用户信息
router.get("/getUser/:id", auth, getUserinfo_controller);
// 删除用户
router.del("/deleteUser/:id", auth, hadAdminPermission, delUser_controller);
// 分页获取用户信息
router.post("/getUser", auth, hadAdminPermission, getUserInfoList_controller);

module.exports = router;
