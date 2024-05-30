const Router = require("koa-router");
const { handleLike } = require("../controller/likes_controller");
const { auth } = require("../middleware/auth_middleware");

const router = new Router();

// 点赞或取消点赞
router.post("/like", auth, handleLike);

module.exports = router;
