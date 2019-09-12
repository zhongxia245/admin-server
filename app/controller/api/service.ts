import { Controller } from 'egg';

export default class EggController extends Controller {
  public async index() {
    const { ctx } = this;
    const data = await ctx.service.service.get(ctx.query);
    ctx.body = ctx.formatResult(data);
  }

  public async getById() {
    const { ctx } = this;
    const data = await ctx.service.service.getById(ctx.params.id);
    ctx.body = ctx.formatResult(data);
  }

  public async create() {
    const { ctx } = this;
    const doc = ctx.request.body;
    const data = await ctx.service.service.create(doc);
    ctx.body = ctx.formatResult(data);
  }

  public async update() {
    const { ctx } = this;
    const doc = ctx.request.body;
    const data = await ctx.service.service.update(ctx.params.id, doc);
    ctx.body = ctx.formatResult(data);
  }

  public async delete() {
    const { ctx } = this;
    const data = await ctx.service.service.delete(ctx.params.id);
    ctx.body = ctx.formatResult(data);
  }
}
