'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'technologies';

const technologies: Array<IRoute> = [
  {
    method: 'GET',
    query: [{ name: 'type_id', type: 'string', required: false }],
    body: [],
    path: `${prefix}`,
    middlewares: ['track-ip']
  },
  {
    method: 'GET',
    query: [],
    body: [],
    path: `${prefix}/giaohangnhanh/provinces`,
    middlewares: ['track-ip']
  },
  {
    method: 'GET',
    query: [{ name: 'province_id', type: 'number', required: false }],
    body: [],
    path: `${prefix}/giaohangnhanh/districts`,
    middlewares: ['track-ip']
  },
  {
    method: 'GET',
    query: [{ name: 'district_id', type: 'number', required: false }],
    body: [],
    path: `${prefix}/giaohangnhanh/wards`,
    middlewares: ['track-ip']
  },
  {
    method: 'GET',
    query: [],
    body: [],
    path: `${prefix}/giaohangnhanh/stations`,
    middlewares: ['track-ip']
  },
  {
    method: 'GET',
    query: [{ name: 'type', type: 'string', required: true }],
    body: [],
    path: `${prefix}/vietcetera`,
    middlewares: ['track-ip']
  }
];

export default technologies;
