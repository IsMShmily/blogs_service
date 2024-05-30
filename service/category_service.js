const Category = require("../model/category_model");
class CategoryService {
  // 添加
  async createData(data) {
    const newData = {
      ...data,
      detailImageUrls: data.detailImageUrls
        ? data.detailImageUrls.join(";")
        : "",
    };
    const res = await Category.create(newData);
    return res.dataValues;
  }

  // 删除
  async delData(id) {
    const res = await Category.destroy({
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
    const res = await Category.findOne({
      // attributes: ["id", "userName", "password", "userType"],
      where: whereOpt,
    });
    return res ? res : null;
  }

  // 更新
  async updateByIdData({ categoryName, id }) {
    const whereOpt = { id };
    const data = {};
    categoryName && Object.assign(data, { categoryName });
    const res = await Category.update(data, { where: whereOpt });
    return res[0] > 0;
  }
  /**
   * 分页获取
   * @param {*} page 页数
   * @param {*} size 条数
   */
  async getList(page, size) {
    const res = await Category.findAndCountAll({
      offset: (page - 1) * size,
      limit: size,
    });

    return {
      total: res.count,
      records: res.rows,
    };
  }
}

module.exports = new CategoryService();
