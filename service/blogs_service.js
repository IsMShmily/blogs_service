const Goods = require("../model/blogs_model");
const Likes = require("../model/likes_model");
class GoodsService {
  /** 创建博客 */
  async createGoods(goods) {
    const res = await Goods.create(goods);
    return res.dataValues;
  }

  async updateGoods(id, goods) {
    const res = await Goods.update(goods, { where: { id } });
    return res[0] > 0;
  }

  // 删除
  async delData(id) {
    const res = await Goods.destroy({
      where: { id },
    });
    return res;
  }

  //获取数据
  async getData({ userName, userId, id, password, userType }) {
    const whereOpt = {};
    id && Object.assign(whereOpt, { id });
    userName && Object.assign(whereOpt, { userName });
    password && Object.assign(whereOpt, { password });
    userType && Object.assign(whereOpt, { userType });
    const res = await Goods.findOne({
      // attributes: ["id", "userName", "password", "userType"],
      where: whereOpt,
    });
    if (res) {
      // 更新查询到的记录的 browse 字段使其自增 1
      await Goods.update(
        { browse: res.browse + 1 },
        {
          where: { id: res.id },
        }
      );
    }
    if (userId) {
      const userLike = await Likes.findOne({ where: { userId, blogId: id } });
      return res
        ? { ...res.dataValues, isLike: userLike ? true : false }
        : null;
    } else {
      return res ? { ...res.dataValues, isLike: false } : null;
    }
  }
  /**
   * 分页获取
   * @param {*} page 页数
   * @param {*} size 条数
   */
  async getList(page, size, categoryId, userId) {
    let whereClause = {};
    if (categoryId !== null) {
      whereClause.categoryId = categoryId;
    }
    const res = await Goods.findAndCountAll({
      where: whereClause,
      offset: (page - 1) * size,
      limit: size,
      order: [['createdAt', 'DESC']], // 按照createdAt字段降序排序
      attributes: [
        "title",
        "brief",
        "praise",
        "browse",
        "thumbnail",
        "createdAt",
        "id",
      ],
    });
    if (userId) {
      const blogIds = res.rows.map((record) => record.id);
      const userLikes = await Likes.findAll({
        where: {
          userId,
          blogId: blogIds,
        },
        attributes: ["blogId"],
      });
      const likedBlogIds = userLikes.map((like) => like.blogId);

      const recordsWithLikes = res.rows.map((record) => ({
        ...record.dataValues,
        isLike: likedBlogIds.includes(record.id),
      }));

      return {
        total: res.count,
        records: recordsWithLikes,
      };
    }else{
      return {
        total: res.count,
        records: res.rows.map(item=>{
          return{
            isLike:false,
            ...item.dataValues
          }
        }),
      };
    }
  }
}

module.exports = new GoodsService();
