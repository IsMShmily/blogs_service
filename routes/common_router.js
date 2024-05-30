/*
 * @Date: 2024-04-16 10:05:21
 * @LastEditTime: 2024-05-25 18:13:26
 * @FilePath: /blogs-server/routes/common_router.js
 * @Description: 公共路由
 *
 */
const router = require("koa-router")();
const { auth } = require("../middleware/auth_middleware");
const { upload, SendCode } = require("../controller/common_controller");
const { emailMiddleware } = require("../middleware/common_middleware");
const { verifyEmail } = require("../middleware/user_middleware");

// 上传图片
router.post("/upload", auth, upload);

// 获取验证码
router.post("/sendCode", emailMiddleware, verifyEmail, SendCode);

module.exports = router;
