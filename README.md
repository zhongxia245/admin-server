# hackernews-async-ts

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## 快速开始

### 如何开发

```bash
npm i
npm run dev
# open http://localhost:7001/
```

不要再开发环境执行 tsc 编译，如果已经执行了，你需要执行 `npm run clean` 在 `npm run dev` 之前。

### 部署

```bash
npm run tsc
npm start
```

#### 在自己服务器上

```bash
# 第一次部署
git clone https://github.com/zhongxia245/admin-server.git
cd admin-server
npm i
npm run tsc
pm2 start pm2.json

# 更新代码
sh deploy.sh
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### 环境要求

- Node.js 8.x
- Typescript 2.8+
