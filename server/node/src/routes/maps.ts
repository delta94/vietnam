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
  {
    method: 'GET',
    query: [
      { name: 'level_en', type: 'string', required: false },
      { name: 'macro_region_en', type: 'string', required: false }
    ],
    body: [],
    path: `${prefix}/provinces`,
    middlewares: ['track-ip']
  },
  {
    method: 'GET',
    query: [{ name: 'province_id', type: 'string', required: true }],
    body: [],
    path: `${prefix}/districts`,
    middlewares: ['track-ip']
  },
  {
    method: 'GET',
    query: [
      { name: 'skip', type: 'number', required: false },
      { name: 'limit', type: 'number', required: false }
    ],
    body: [],
    path: `${prefix}/wards`,
    middlewares: ['track-ip']
  },
  {
    method: 'GET',
    query: [{ name: 'province_id', type: 'string', required: false }],
    body: [],
    path: `${prefix}/postal-codes`,
    middlewares: ['track-ip']
  }
];

export default maps;
