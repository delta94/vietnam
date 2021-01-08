'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = `banks`;

const banks: Array<IRoute> = [
  { method: `GET`, query: [], body: [], path: `${prefix}`, middlewares: ['track-ip'] },
  { method: `GET`, query: [], body: [], path: `${prefix}/forex/banks`, middlewares: ['track-ip'] },
  { method: `GET`, query: [], body: [], path: `${prefix}/forex/rates`, middlewares: ['track-ip'] },
  { method: `GET`, query: [], body: [], path: `${prefix}/forex/debug`, middlewares: ['track-ip'] },
  {
    method: `POST`,
    query: [],
    body: [{ name: 'id', required: true, type: 'string' }],
    path: `${prefix}/forex/sync`,
    middlewares: ['track-ip']
  },
  { method: `POST`, query: [], body: [], path: `${prefix}/forex/resync`, middlewares: ['track-ip'] }
];

export default banks;
