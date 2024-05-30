/*
 * @Date: 2024-04-14 22:20:15
 * @LastEditTime: 2024-05-28 06:53:02
 * @FilePath: /blogs-server/routes/blogs_router.js
 * @Description: 文章路由
 *
 */
const router = require("koa-router")();
router.prefix("/blogs");
const { auth, hadAdminPermission } = require("../middleware/auth_middleware");
const { validator } = require("../middleware/blogs_middleware");
const {
  create,
  update,
  getList_controller,
  del_controller,
  getData_controller,
} = require("../controller/blogs_controller");

//上传文章
router.post("/add", auth, hadAdminPermission, validator, create);

// 修改文章
router.post("/update", auth, hadAdminPermission, validator, update);

// 删除
router.del("/delete/:id", auth, hadAdminPermission, del_controller);

// 分页获取
router.post("/getList", getList_controller);

// 根据id获取
router.get("/getById", getData_controller);

module.exports = router;
