'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'government';

const government: Array<IRoute> = [
  {
    method: `GET`,
    query: [{ name: 'level_en', type: 'string', required: false }],
    body: [],
    path: `${prefix}/ministries`,
    middlewares: []
  },
  {
    method: `GET`,
    query: [{ name: 'ministry', type: 'string', required: true }],
    body: [],
    path: `${prefix}/ministers`,
    middlewares: []
  },
  { method: `GET`, query: [], body: [], path: `${prefix}/incumbents`, middlewares: [] },
  {
    method: `GET`,
    query: [],
    body: [],
    path: `${prefix}/general-secretaries`,
    middlewares: []
  },
  { method: `GET`, query: [], body: [], path: `${prefix}/presidents`, middlewares: [] },
  {
    method: `GET`,
    query: [],
    body: [],
    path: `${prefix}/prime-ministers`,
    middlewares: []
  },
  {
    method: `GET`,
    query: [],
    body: [],
    path: `${prefix}/national-assembly/chairs`,
    middlewares: []
  },
  {
    method: `GET`,
    query: [{ name: 'no', type: 'number', required: true }],
    body: [],
    path: `${prefix}/national-assembly/members`,
    middlewares: []
  }
];

export default government;
