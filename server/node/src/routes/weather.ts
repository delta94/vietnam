'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'weather';

const weather: Array<IRoute> = [
  {
    method: 'GET',
    query: [{ name: 'city', type: 'string', required: true }],
    body: [],
    path: `${prefix}`,
    middlewares: []
  },
  {
    method: 'GET',
    query: [{ name: 'city', type: 'string', required: true }],
    body: [],
    path: `${prefix}/air-visual`,
    middlewares: []
  },
  {
    method: 'GET',
    query: [],
    body: [],
    path: `${prefix}/air-visual/cities`,
    middlewares: []
  }
];

export default weather;
