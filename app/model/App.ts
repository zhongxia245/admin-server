'use strict';

export default (app: any) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId;

  const AppSchema = new Schema({
    name: { type: String },
    group_id: { type: ObjectId },
    service_id: { type: ObjectId },
    remark: { type: String },
    config: { type: String, default: '' },
    status: { type: Number, default: 1 },
    version: { type: Number, default: 1 },
  });

  return mongoose.model('App', AppSchema);
};
