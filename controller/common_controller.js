const {
  fileUploadError,
  unSupportedFileType,
} = require("../constant/err_type");
const { EMAIL_USER } = require("../config");
const path = require("path");
const transporter = require("../utils/email");
const redis = require("../db/redis");

class CommonController {
  // 上传图片
  async upload(ctx, next) {
    const { file } = ctx.request.files;
    const fileTypes = ["image/jpg", "image/jpeg", "image/png"];
    if (file) {
      if (!fileTypes.includes(file.mimetype)) {
        return ctx.app.emit("error", unSupportedFileType, ctx);
      }
      ctx.body = {
        code: 200,
        msg: "上传成功",
        data: "http://localhost:8000/" + path.basename(file.filepath),
      };
    } else {
      return ctx.app.emit("error", fileUploadError, ctx);
    }
  }
  // 发送邮箱验证码
  async SendCode(ctx, next) {
    const { email } = ctx.request.body;
    const code = Math.random().toString().slice(2, 6);
    let time = new Date();
    const mailOptions = {
      from: EMAIL_USER,
      cc: EMAIL_USER,
      to: email,
      subject: "验证码",
      html: `<h2>欢迎访问shmily_yy的博客</h2>
      <h4>注意：验证码有效期为5分钟<h4/>
      <h4>您的验证码为：<span style="color:red">${code}</span></h4>
      <br />    
      <p>如非本人操作请忽略此信息</p>
      <br />     
      <p style="text-align:end;">${time.toLocaleDateString()}  ${
        time.getHours() + ":" + time.getMinutes()
      }</p>
      <p style="text-align:end;">shmily_yy博客</p>
  
     `,
    };
    try {
      await transporter.sendMail(mailOptions);
      await redis.set(`code:${email}`, code, "EX", 60 * 5); // 设置验证码，过期时间为 300 秒
      ctx.body = {
        code: 200,
        msg: "邮箱验证码发送成功！",
        data: true,
      };
    } catch (e) {
      console.error("Failed to send email or set Redis key:", e);
      ctx.body = {
        code: -1,
        message: "邮箱验证码发送失败！",
        data: false,
      };
    }
  }
}

module.exports = new CommonController();
 