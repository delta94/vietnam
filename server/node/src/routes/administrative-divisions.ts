'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'administrative-divisions';

const administrativeDivisions: Array<IRoute> = [
  {
    method: 'GET',
    query: [],
    body: [],
    path: `${prefix}/macro-regions`,
    middlewares: []
  },
  { method: 'GET', query: [], body: [], path: `${prefix}/regions`, middlewares: [] },
  {
    method: 'GET',
    query: [
      { name: 'level_en', type: 'string', required: false },
      { name: 'macro_region_en', type: 'string', required: false }
    ],
    body: [],
    path: `${prefix}/provinces`,
    middlewares: []
  },
  {
    method: 'GET',
    query: [{ name: 'province_id', type: 'string', required: true }],
    body: [],
    path: `${prefix}/districts`,
    middlewares: []
  },
  {
    method: 'GET',
    query: [
      { name: 'skip', type: 'number', required: false },
      { name: 'limit', type: 'number', required: false }
    ],
    body: [],
    path: `${prefix}/wards`,
    middlewares: []
  },
  {
    method: 'GET',
    query: [{ name: 'province_id', type: 'string', required: false }],
    body: [],
    path: `${prefix}/postal-codes`,
    middlewares: []
  }
];

export default administrativeDivisions;
