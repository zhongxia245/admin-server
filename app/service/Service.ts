'use strict';

import { Service } from 'egg';

/**
 * 接口服务，用于配置各个接口服务的协议，域名，端口
 * @class EggService
 * @extends {Service}
 */
class EggService extends Service {
  async get({ perPage = 10, page = 1 }: { perPage: number; page: number }) {
    perPage = Number(perPage);
    page = Number(page);
    const result = await this.ctx.model.Service.find({})
      .skip((page - 1) * perPage)
      .limit(perPage);
    return result;
  }

  async getById(id: string) {
    const result = await this.ctx.model.Service.findOne({ _id: id });
    return result;
  }

  async create(doc: any) {
    const result = await this.ctx.model.Service.create(doc);
    return result;
  }

  async update(id: any, doc: any) {
    const result = await this.ctx.model.Service.update({ _id: id }, doc);
    return result;
  }

  async delete(id: any) {
    const result = await this.ctx.model.Service.deleteOne({ _id: id });
    return result;
  }
}

module.exports = EggService;
