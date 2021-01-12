'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'weather';

const weather: Array<IRoute> = [
  {
    method: 'GET',
    query: [{ name: 'city', type: 'string', required: true }],
    body: [],
    path: `${prefix}`,
    middlewares: []
  }
];

export default weather;
