'use strict';

export default (app: any) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId;

  const AppSchema = new Schema({
    name: { type: String },
    group: { type: ObjectId, ref: 'Group' }, // 关联表
    service: { type: ObjectId, ref: 'Service' }, // 关联表
    remark: { type: String },
    env: { type: String, default: 'dev' }, // dev:测试环境 prod:线上环境
    config: { type: String, default: '' },
    status: { type: Number, default: 1 },
    version: { type: Number, default: 1 },
  });

  return mongoose.model('App', AppSchema);
};
