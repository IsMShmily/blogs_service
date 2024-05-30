const Comment = require("../model/comment_model");
const User = require("../model/user_model");
class CommentService {
  // 添加
  async createData(data) {
    const res = await Comment.create(data);
    return res.dataValues;
  }

  // 删除
  async delData(id) {
    const res = await Comment.destroy({
      where: { id },
    });
    return res;
  }

  //获取数据
  async getData({ userName, id, password, userType }) {
    const whereOpt = {};
    id && Object.assign(whereOpt, { id });
    userName && Object.assign(whereOpt, { userName });
    password && Object.assign(whereOpt, { password });
    userType && Object.assign(whereOpt, { userType });
    const res = await Comment.findOne({
      // attributes: ["id", "userName", "password", "userType"],
      where: whereOpt,
    });
    return res ? res : null;
  }

  // 更新
  async updateByIdData({ ContactWeName, id }) {
    const whereOpt = { id };
    const data = {};
    ContactWeName && Object.assign(data, { ContactWeName });
    const res = await Comment.update(data, { where: whereOpt });
    return res[0] > 0;
  }
  /**
   * 分页获取
   * @param {*} page 页数
   * @param {*} size 条数
   */
  async getList(page, size) {
    const res = await Comment.findAndCountAll({
      offset: (page - 1) * size,
      limit: size,
      order: [['createdAt', 'DESC']], // 按照createdAt字段降序排序
      include: [
        {
          model: User,
          attributes: ["username","avatar"], // 选择要查询的用户字段
        },
      ],
    });

    return {
      total: res.count,
      records: res.rows,
    };
  }
}

module.exports = new CommentService();
