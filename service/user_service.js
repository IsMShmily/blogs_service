const User = require("../model/user_model");

class UserService {
  // 创建用户
  async createUser({
    password,
    userName,
    userType,
    avatar,
    email,
  }) {
    const userInfo = {};
    userName && Object.assign(userInfo, { userName });
    password && Object.assign(userInfo, { password });
    userType && Object.assign(userInfo, { userType });
    avatar && Object.assign(userInfo, { avatar });
    email && Object.assign(userInfo, { email });
    try {
      const res = await User.create(userInfo);
      return res.dataValues;
    } catch (error) {
      console.error(error);
    }
  }
  //获取用户信息
  async getuserinfo({ email, id, password, userType }) {
    const whereOpt = {};
    id && Object.assign(whereOpt, { id });
    email && Object.assign(whereOpt, { email });
    password && Object.assign(whereOpt, { password });
    userType && Object.assign(whereOpt, { userType });
    const res = await User.findOne({
      // attributes: ["id", "userName", "password", "userType"],
      where: whereOpt,
    });
    return res ? res.dataValues : null;
  }

  // 更新用户信息
  async updateByIdUser({
    password,
    userName,
    userType,
    nickName,
    email,
    phone,
    sex,
    id,
  }) {
    const whereOpt = { id };
    const userInfo = {};
    userName && Object.assign(userInfo, { userName });
    password && Object.assign(userInfo, { password });
    userType && Object.assign(userInfo, { userType });
    nickName && Object.assign(userInfo, { nickName });
    email && Object.assign(userInfo, { email });
    phone && Object.assign(userInfo, { phone });
    sex && Object.assign(userInfo, { sex });
    console.log(userInfo);
    const res = await User.update(userInfo, { where: whereOpt });
    return res[0] > 0;
  }

  /**
   * 删除用户
   * @param {*} id
   * @returns
   */
  async delUser(id) {
    const res = await User.destroy({
      where: { id },
    });
    return res;
  }

  /**
   * 分页获取用户信息
   * @param {*} page 页数
   * @param {*} size 条数
   */
  async getUserInfoList(page, size) {
    const res = await User.findAndCountAll({
      offset: (page - 1) * size,
      limit: size,
    });
    return {
      total: res.count,
      records: res.rows,
    };
  }
}

module.exports = new UserService();
