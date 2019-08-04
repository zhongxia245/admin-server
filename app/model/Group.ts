'use strict';

export default (app: any) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const GroupSchema = new Schema({
    name: { type: String }, // 分组名称
    remark: { type: String }, // 分组介绍
    status: { type: Number, default: 1 }, // 分组状态： 1 可用，0 禁用
  });

  return mongoose.model('Group', GroupSchema);
};
