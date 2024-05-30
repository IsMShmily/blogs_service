/*
 * @Author: shmily_yy
 * @Date: 2024-04-17 09:47:24
 * @LastEditors: shmily_yy ml13846598527@gmail.com
 * @LastEditTime: 2024-05-26 21:31:20
 * @FilePath: /blogs-server/routes/comment_router.js
 * @Description: 留言表
 *
 */

const router = require("koa-router")();
router.prefix("/comment");
const { auth, hadAdminPermission } = require("../middleware/auth_middleware");
const {
  add_controll,
  del_controller,
  getData_controller,
  getList_controller,
  updateData,
} = require("../controller/comment_controller");

// 添加
router.post("/add", auth, add_controll);

// 删除
router.del("/delete/:id", auth, hadAdminPermission, del_controller);

// 分页获取
router.post("/list", getList_controller);

// 修改
router.post("/update", auth, hadAdminPermission, updateData);

// 根据id获取
router.get("/getById/:id", getData_controller);

module.exports = router;
