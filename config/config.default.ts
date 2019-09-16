import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1564904530138_4645';

  // add your egg config in here
  config.middleware = [];

  /**
   * @see http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html#createCollection
   */
  config.mongoose = {
    url: process.env.EGG_MONGODB_URL || 'mongodb://www.izhongxia.com:27017/admin',
    options: {
      server: { poolSize: 20 },
    },
  };

  config.security = {
    domainWhiteList: ['http://localhost:8000'],
    csrf: {
      enable: false,
    },
  };

  // PM2如何启动： https://eggjs.org/zh-cn/faq.html#%E8%BF%9B%E7%A8%8B%E7%AE%A1%E7%90%86%E4%B8%BA%E4%BB%80%E4%B9%88%E6%B2%A1%E6%9C%89%E9%80%89%E5%9E%8B-pm2
  // EGGJS 如何修改启动接口: https://github.com/eggjs/egg/issues/2175
  // 启动接口
  config.cluster = {
    listen: {
      port: 10086,
    },
  };

  // 允许跨域访问
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
