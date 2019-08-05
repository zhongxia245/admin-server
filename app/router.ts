import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  const { api } = controller;

  router.get('/', controller.home.index);

  // 接口
  const apiV1Router: Egg.Router = router.namespace('/api/v1');

  // 应用信息
  apiV1Router.get('/app', api.app.index);
  apiV1Router.get('/app/:id', api.app.getById);
  apiV1Router.post('/app', api.app.create);
  apiV1Router.post('/app/:id', api.app.update);
  apiV1Router.delete('/app/:id', api.app.delete);

  // 分组信息
  apiV1Router.get('/group', api.group.index);
  apiV1Router.get('/group/:id', api.group.getById);
  apiV1Router.post('/group', api.group.create);
  apiV1Router.post('/group/:id', api.group.update);
  apiV1Router.delete('/group/:id', api.group.delete);

  // 接口服务信息
  apiV1Router.get('/service', api.service.index);
  apiV1Router.get('/service/:id', api.service.getById);
  apiV1Router.post('/service', api.service.create);
  apiV1Router.post('/service/:id', api.service.update);
  apiV1Router.delete('/service/:id', api.service.delete);
};
