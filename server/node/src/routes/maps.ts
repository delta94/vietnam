'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'maps';

const maps: Array<IRoute> = [
  {
    method: 'GET',
    query: [],
    body: [],
    path: `${prefix}/macro-regions`,
    middlewares: ['track-ip']
  },
  { method: 'GET', query: [], body: [], path: `${prefix}/regions`, middlewares: ['track-ip'] },
  { method: 'GET', query: [], body: [], path: `${prefix}/provinces`, middlewares: ['track-ip'] },
  { method: 'GET', query: [], body: [], path: `${prefix}/districts`, middlewares: ['track-ip'] },
  { method: 'GET', query: [], body: [], path: `${prefix}/wards`, middlewares: ['track-ip'] },
  { method: 'GET', query: [], body: [], path: `${prefix}/postal-codes`, middlewares: ['track-ip'] }
];

export default maps;
