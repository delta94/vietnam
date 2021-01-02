'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'government';

const government: Array<IRoute> = [
  { method: `GET`, path: `${prefix}/ministries`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/ministers`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/incumbents`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/general-secretaries`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/presidents`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/prime-ministers`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/national-assembly/chairs`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/national-assembly/members`, middlewares: ['track-ip'] }
];

export default government;
