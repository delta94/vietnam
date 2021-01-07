'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = `banks`;

const banks: Array<IRoute> = [
  { method: `GET`, path: `${prefix}`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/forex/banks`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/forex/rates`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/forex/debug`, middlewares: ['track-ip'] },
  { method: `POST`, path: `${prefix}/forex/sync`, middlewares: ['track-ip'] },
  { method: `POST`, path: `${prefix}/forex/resync`, middlewares: ['track-ip'] }
];

export default banks;
