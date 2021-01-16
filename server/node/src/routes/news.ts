'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'news';

const news: Array<IRoute> = [
  { method: 'GET', query: [], body: [], path: `${prefix}`, middlewares: [] },
  { method: 'GET', query: [], body: [], path: `${prefix}/trends`, middlewares: [] },
  { method: 'GET', query: [], body: [], path: `${prefix}/sources`, middlewares: [] },
  {
    method: 'GET',
    query: [{ name: 'source', type: 'string', required: false }],
    body: [],
    path: `${prefix}/categories`,
    middlewares: []
  },
  {
    method: 'GET',
    query: [
      { name: 'category', type: 'string', required: false },
      { name: 'source', type: 'string', required: false }
    ],
    body: [],
    path: `${prefix}/articles`,
    middlewares: []
  }
];

export default news;
