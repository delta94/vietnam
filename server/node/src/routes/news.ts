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
    middlewares: []
  },
  { method: 'GET', query: [], body: [], path: `${prefix}/categories`, middlewares: [] },
  { method: 'GET', query: [], body: [], path: `${prefix}/sources`, middlewares: [] },
  { method: 'GET', query: [], body: [], path: `${prefix}/trends`, middlewares: [] }
];

export default news;
