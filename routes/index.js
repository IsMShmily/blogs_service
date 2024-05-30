/*
 * @Date: 2024-04-14 22:36:11
 * @LastEditTime: 2024-04-17 09:40:26
 * @FilePath: /cake_project/routes/index.js
 * @Description: 解析 routes 文件夹下的所有文件，并暴露给app.js挂载到路由中
 *
 */
const fs = require("fs");
const router = require("koa-router")();

fs.readdirSync(__dirname).forEach((file) => {
  console.log(file);
  if (file !== "index.js") {
    const r = require(`./${file}`);
    router.use(r.routes());
  }
});
module.exports = router;
