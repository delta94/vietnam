'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'technologies';

const technologies: Array<IRoute> = [
  { method: 'GET', query: [], body: [], path: `${prefix}`, middlewares: ['track-ip'] },
  {
    method: 'GET',
    query: [],
    body: [],
    path: `${prefix}/giaohangnhanh/provinces`,
    middlewares: ['track-ip']
  },
  {
    method: 'GET',
    query: [],
    body: [],
    path: `${prefix}/giaohangnhanh/districts`,
    middlewares: ['track-ip']
  },
  {
    method: 'GET',
    query: [],
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
  }
];

export default technologies;
