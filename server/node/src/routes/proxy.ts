'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'proxy';

const proxy: Array<IRoute> = [
  {
    method: 'GET',
    query: [{ name: 'url', type: 'string', required: true }],
    body: [],
    path: `${prefix}`,
    middlewares: []
  }
];

export default proxy;
