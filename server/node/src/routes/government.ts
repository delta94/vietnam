'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'government';

const government: Array<IRoute> = [
  {
    method: `GET`,
    query: [{ name: 'level_en', type: 'string', required: false }],
    body: [],
    path: `${prefix}/ministries`,
    middlewares: ['track-ip']
  },
  {
    method: `GET`,
    query: [{ name: 'ministry', type: 'string', required: true }],
    body: [],
    path: `${prefix}/ministers`,
    middlewares: ['track-ip']
  },
  { method: `GET`, query: [], body: [], path: `${prefix}/incumbents`, middlewares: ['track-ip'] },
  {
    method: `GET`,
    query: [],
    body: [],
    path: `${prefix}/general-secretaries`,
    middlewares: ['track-ip']
  },
  { method: `GET`, query: [], body: [], path: `${prefix}/presidents`, middlewares: ['track-ip'] },
  {
    method: `GET`,
    query: [],
    body: [],
    path: `${prefix}/prime-ministers`,
    middlewares: ['track-ip']
  },
  {
    method: `GET`,
    query: [],
    body: [],
    path: `${prefix}/national-assembly/chairs`,
    middlewares: ['track-ip']
  },
  {
    method: `GET`,
    query: [{ name: 'no', type: 'number', required: true }],
    body: [],
    path: `${prefix}/national-assembly/members`,
    middlewares: ['track-ip']
  }
];

export default government;
