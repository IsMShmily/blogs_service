const nodemailer = require("nodemailer");
const { EMAIL_SELECT, EMAIL_USER } = require("../../config");

const transporter = nodemailer.createTransport({
  service: "163",
  secureConnection: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_SELECT, //这个是开启`POP3/SMTP/IMAP`的授权码
  },
});

module.exports = transporter;
