import { Controller } from 'egg';

export default class EggController extends Controller {
  public async index() {
    const { ctx } = this;
    const data = await ctx.service.app.get(ctx.queries);
    ctx.body = ctx.formatResult(data);
  }

  public async getById() {
    const { ctx } = this;
    const data = await ctx.service.app.getById(ctx.params.id);
    ctx.body = ctx.formatResult(data);
  }

  public async create() {
    const { ctx } = this;
    const doc = ctx.request.body;
    const data = await ctx.service.app.create(doc);
    ctx.body = ctx.formatResult(data);
  }

  public async update() {
    const { ctx } = this;
    const doc = ctx.request.body;
    const data = await ctx.service.app.update(ctx.params.id, doc);
    ctx.body = ctx.formatResult(data);
  }

  public async delete() {
    const { ctx } = this;
    const data = await ctx.service.app.delete(ctx.params.id);
    ctx.body = ctx.formatResult(data);
  }
}
