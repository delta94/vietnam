'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'technologies';

const technologies: Array<IRoute> = [
  { method: 'GET', path: `${prefix}`, middlewares: ['track-ip'] }
];

export default technologies;
