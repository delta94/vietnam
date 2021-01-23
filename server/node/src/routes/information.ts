'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'information';

const information: Array<IRoute> = [
  { method: 'GET', query: [], body: [], path: `${prefix}`, middlewares: [] },
  {
    method: 'GET',
    query: [{ name: 'prefix', type: 'string', required: false }],
    body: [],
    path: `${prefix}/phones/prefixes`,
    middlewares: []
  },
  { method: 'GET', query: [], body: [], path: `${prefix}/phones/providers`, middlewares: [] },
  { method: 'POST', query: [], body: [], path: `${prefix}/phones/provider`, middlewares: [] }
];

export default information;
