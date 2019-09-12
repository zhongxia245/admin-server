'use strict';

import { Service } from 'egg';

/**
 * 应用分组表
 * @class EggService
 * @extends {Service}
 */
class EggService extends Service {
  async get({
    name = '',
    perPage = 10,
    page = 1,
  }: {
    name: string;
    perPage: number;
    page: number;
  }) {
    perPage = Number(perPage);
    page = Number(page);

    let query = {};
    if (name) {
      query = {
        name: new RegExp(name),
      };
    }

    // 模糊查询用正则
    const result = await this.ctx.model.Group.find(query)
      .skip((page - 1) * perPage)
      .limit(perPage);
    return result;
  }

  async getById(id: string) {
    const result = await this.ctx.model.Group.findOne({ _id: id });
    return result;
  }

  async create(doc: any) {
    const result = await this.ctx.model.Group.create(doc);
    return result;
  }

  async update(id: any, doc: any) {
    const result = await this.ctx.model.Group.update({ _id: id }, doc);
    return result;
  }

  async delete(id: any) {
    const result = await this.ctx.model.Group.deleteOne({ _id: id });
    return result;
  }
}

module.exports = EggService;
