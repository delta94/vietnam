'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'news';

const news: Array<IRoute> = [
  {
    method: 'GET',
    query: [
      { name: 'category', type: 'string', required: true },
      { name: 'source', type: 'string', required: true }
    ],
    body: [],
    path: `${prefix}`,
    middlewares: ['track-ip']
  },
  { method: 'GET', query: [], body: [], path: `${prefix}/categories`, middlewares: ['track-ip'] },
  { method: 'GET', query: [], body: [], path: `${prefix}/sources`, middlewares: ['track-ip'] },
  { method: 'GET', query: [], body: [], path: `${prefix}/trends`, middlewares: ['track-ip'] }
];

export default news;
