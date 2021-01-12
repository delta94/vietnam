'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'youtube';

const youtube: Array<IRoute> = [
  { method: 'GET', query: [], body: [], path: `${prefix}`, middlewares: [] },
  {
    method: 'GET',
    query: [
      { name: 'categoryId', type: 'number', required: false },
      { name: 'max', type: 'number', required: false }
    ],
    body: [],
    path: `${prefix}/trending`,
    middlewares: []
  },
  {
    method: 'GET',
    query: [],
    body: [],
    path: `${prefix}/video-categories`,
    middlewares: []
  }
];

export default youtube;
