/*
 * @Date: 2024-04-16 22:15:30
 * @LastEditTime: 2024-05-26 01:39:24
 * @FilePath: /blogs-server/routes/category_router.js
 * @Description: 文章类型路由
 * 
 */
const router = require("koa-router")();
router.prefix("/category");
const { auth, hadAdminPermission } = require("../middleware/auth_middleware");
const {
  add_controll,
  del_controller,
  getData_controller,
  getList_controller,
  updateData,
} = require("../controller/category_controller");

// 添加
router.post("/add", auth, hadAdminPermission, add_controll);

// 删除
router.del("/delete/:id", auth, hadAdminPermission, del_controller);

// 分页获取
router.post("/getList", getList_controller);

// 修改
router.post("/update", auth, hadAdminPermission, updateData);

// 根据id获取
router.get("/getById/:id",  getData_controller);

module.exports = router;
