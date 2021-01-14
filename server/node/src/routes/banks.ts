'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = `banks`;

const banks: Array<IRoute> = [
  { method: `GET`, query: [], body: [], path: `${prefix}`, middlewares: [] },
  { method: `GET`, query: [], body: [], path: `${prefix}/forex/banks`, middlewares: [] },
  {
    method: `GET`,
    query: [{ name: 'id', required: false, type: 'string' }],
    body: [],
    path: `${prefix}/forex/rates`,
    middlewares: []
  },
  {
    method: `POST`,
    query: [],
    body: [{ name: 'id', required: true, type: 'string' }],
    path: `${prefix}/forex/sync`,
    middlewares: []
  },
  { method: `POST`, query: [], body: [], path: `${prefix}/forex/resync`, middlewares: [] }
];

export default banks;
