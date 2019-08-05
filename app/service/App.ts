'use strict';

import { Service } from 'egg';

/**
 * 应用信息表，保存应用的配置信息
 * @class EggService
 * @extends {Service}
 */
class EggService extends Service {
  async get({ perPage = 10, page = 1 }: { perPage: number; page: number }) {
    perPage = Number(perPage);
    page = Number(page);
    const result = await this.ctx.model.App.find({})
      .skip((page - 1) * perPage)
      .limit(perPage);
    return result;
  }

  async getById(id: string) {
    const result = await this.ctx.model.App.findOne({ _id: id });
    return result;
  }

  async create(doc: any) {
    const result = await this.ctx.model.App.create(doc);
    return result;
  }

  async update(id: any, doc: any) {
    const result = await this.ctx.model.App.update({ _id: id }, doc);
    return result;
  }

  async delete(id: any) {
    const result = await this.ctx.model.App.deleteOne({ _id: id });
    return result;
  }
}

module.exports = EggService;
