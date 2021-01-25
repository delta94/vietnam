'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'usa';

const usa: Array<IRoute> = [
  { method: 'GET', query: [], body: [], path: `${prefix}`, middlewares: [] },
  {
    method: 'GET',
    query: [
      { name: 'chamber', type: 'string', required: false },
      { name: 'congress', type: 'number', required: false }
    ],
    body: [],
    path: `${prefix}/congress`,
    middlewares: []
  }
];

export default usa;
