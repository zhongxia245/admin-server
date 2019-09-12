'use strict';

export default (app: any) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ServiceSchema = new Schema({
    name: { type: String }, // 服务名称
    // 线上环境服务
    protocol: { type: String }, // 服务协议 http / https
    host: { type: String }, // 域名
    port: { type: String }, // 端口
    token: { type: String }, // 【可选】服务 token，用于数据加密
    // 测试环境服务
    protocol_dev: { type: String },
    host_dev: { type: String },
    port_dev: { type: String },
    token_dev: { type: String },

    status: { type: Number, default: 1 },
  });

  return mongoose.model('Service', ServiceSchema);
};
