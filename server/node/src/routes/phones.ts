'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'phones';

const phones: Array<IRoute> = [
  {
    method: 'GET',
    query: [{ name: 'prefix', type: 'string', required: false }],
    body: [],
    path: `${prefix}/prefixes`,
    middlewares: []
  },
  { method: 'GET', query: [], body: [], path: `${prefix}/providers`, middlewares: [] },
  { method: 'POST', query: [], body: [], path: `${prefix}/provider`, middlewares: [] }
];

export default phones;
