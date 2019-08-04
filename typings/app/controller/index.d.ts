// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportApiApp from '../../../app/controller/api/app';
import ExportApiGroup from '../../../app/controller/api/group';
import ExportApiService from '../../../app/controller/api/service';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    api: {
      app: ExportApiApp;
      group: ExportApiGroup;
      service: ExportApiService;
    }
  }
}
