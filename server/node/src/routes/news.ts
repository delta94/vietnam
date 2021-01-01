'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'news';

const news: Array<IRoute> = [
  { method: 'GET', path: `${prefix}`, middlewares: ['track-ip'] },
  { method: 'GET', path: `${prefix}/categories`, middlewares: ['track-ip'] },
  { method: 'GET', path: `${prefix}/sources`, middlewares: ['track-ip'] },
  { method: 'GET', path: `${prefix}/trends`, middlewares: ['track-ip'] }
];

export default news;
