'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'sports';

const sports: Array<IRoute> = [
  { method: 'GET', query: [], body: [], path: `${prefix}`, middlewares: ['track-ip'] },
  { method: 'GET', query: [], body: [], path: `${prefix}/clubs`, middlewares: ['track-ip'] }
];

export default sports;
