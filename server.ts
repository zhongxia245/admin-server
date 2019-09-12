/**
 * 2018-11-14 21:38:40
 * PM2 启动，则使用这个文件
 * 启动命令：
 * pm2 start pm2.json
 */
'use strict';
const egg = require('egg');

const workers = Number(process.argv[2] || require('os').cpus().length);
egg.startCluster({
  workers,
  baseDir: __dirname,
});
