import { Controller } from 'egg';

export default class ProxyController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = ctx.params;
  }
}
