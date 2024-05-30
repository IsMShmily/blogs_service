const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const logger = require("koa-logger");
const errorHandler = require("./err_handler");
const router = require("./routes/index");
const { koaBody } = require("koa-body");
const path = require("path");
const parameter = require("koa-parameter");

// error handler
onerror(app);

// middlewares
// 使用 koa-body 中间件来处理文件上传
app.use(
  koaBody({
    multipart: true, // 启用 multipart/form-data 解析
    formidable: {
      uploadDir: path.join(__dirname, "./uploads"), // 上传文件的目录
      keepExtensions: true, // 保持文件扩展名
    },
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(path.join(__dirname, "./uploads")));

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
app.use(parameter(app));
// routes
app.use(router.routes(), router.allowedMethods());

// error-handling
app.on("error", errorHandler);

module.exports = app;
