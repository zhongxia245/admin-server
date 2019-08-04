// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApp from '../../../app/model/App';
import ExportGroup from '../../../app/model/Group';
import ExportService from '../../../app/model/Service';

declare module 'egg' {
  interface IModel {
    App: ReturnType<typeof ExportApp>;
    Group: ReturnType<typeof ExportGroup>;
    Service: ReturnType<typeof ExportService>;
  }
}
