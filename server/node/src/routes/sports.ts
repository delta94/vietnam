'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'sports';

const sports: Array<IRoute> = [
  { method: 'GET', path: `${prefix}`, middlewares: ['track-ip'] },
  { method: 'GET', path: `${prefix}/clubs`, middlewares: ['track-ip'] }
];

export default sports;
