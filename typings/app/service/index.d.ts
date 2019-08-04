// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApp from '../../../app/service/App';
import ExportGroup from '../../../app/service/Group';
import ExportService from '../../../app/service/Service';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    app: ExportApp;
    group: ExportGroup;
    service: ExportService;
    test: ExportTest;
  }
}
