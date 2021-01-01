'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'maps';

const maps: Array<IRoute> = [
  { method: 'GET', path: `${prefix}/regions`, middlewares: ['track-ip'] },
  { method: 'GET', path: `${prefix}/subregions`, middlewares: ['track-ip'] },
  { method: 'GET', path: `${prefix}/provinces`, middlewares: ['track-ip'] },
  { method: 'GET', path: `${prefix}/districts`, middlewares: ['track-ip'] },
  { method: 'GET', path: `${prefix}/wards`, middlewares: ['track-ip'] },
  { method: 'GET', path: `${prefix}/license-plates`, middlewares: ['track-ip'] },
  { method: 'GET', path: `${prefix}/postal-codes`, middlewares: ['track-ip'] }
];

export default maps;
