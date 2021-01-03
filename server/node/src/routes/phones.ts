'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'phones';

const phones: Array<IRoute> = [
  { method: 'GET', path: `${prefix}/prefixes`, middlewares: ['track-ip'] },
  { method: 'GET', path: `${prefix}/providers`, middlewares: ['track-ip'] },
  { method: 'POST', path: `${prefix}/provider`, middlewares: ['track-ip'] }
];

export default phones;