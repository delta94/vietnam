'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'phones';

const phones: Array<IRoute> = [
  { method: 'GET', query: [], body: [], path: `${prefix}/prefixes`, middlewares: ['track-ip'] },
  { method: 'GET', query: [], body: [], path: `${prefix}/providers`, middlewares: ['track-ip'] },
  { method: 'POST', query: [], body: [], path: `${prefix}/provider`, middlewares: ['track-ip'] }
];

export default phones;
