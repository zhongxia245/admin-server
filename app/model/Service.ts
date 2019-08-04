'use strict';

export default (app: any) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ServiceSchema = new Schema({
    name: { type: String }, // 服务名称
    protocol: { type: String }, // 服务协议 http / https
    host: { type: String }, // 域名
    post: { type: String }, // 域名
    token: { type: String }, // 【可选】服务 token，用于数据假面
    status: { type: Number, default: 1 },
  });

  return mongoose.model('Service', ServiceSchema);
};
