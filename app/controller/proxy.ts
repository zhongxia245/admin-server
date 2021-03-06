import { Controller } from 'egg';
import Axios, { Method } from 'axios';

interface IProxyParams {
  appid: string;
  api_name: string;
  env: string;
}

const axios = Axios.create();

export default class ProxyController extends Controller {
  public async index() {
    const { ctx } = this;
    try {
      const { appid, api_name }: IProxyParams = ctx.params;

      // 1、获取应用信息
      const appInfo = await ctx.service.app.getById(appid);
      const appConfig = JSON.parse(appInfo.config || '{}');
      const apis = (appConfig && appConfig.apis) || [];
      const api = apis.filter((item: any) => item.name === api_name)[0];

      // 找到对应的接口地址
      if (api && api.path) {
        // 获取服务域名和密钥
        // TODO:这里需要判断测试环境还是线上环境 ,通过 env 来判断
        const serviceInfo = await ctx.service.service.getById(appInfo.service);
        const baseUrl = `${serviceInfo.protocol || 'http'}://${serviceInfo.host}`;

        const options: any = {
          url: `${baseUrl}${api.path}`,
          method: (api.method as Method) || 'GET',
          data: ctx.request.body,
        };

        // 用于传递密钥，保证接口可以请求
        if (serviceInfo.token) {
          options.header = {};
          options.header.token = serviceInfo.token;
        }

        const result = await axios(options).then(resp => resp.data);

        ctx.body = result;
      } else {
        ctx.body = {
          success: false,
          msg: `${api_name}:接口地址不存在`,
        };
      }
    } catch (error) {
      ctx.logger.error(error.message);
      ctx.body = {
        success: false,
        msg: error.message,
      };
    }
  }
}
