'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'license-plates';

const licensePlates: Array<IRoute> = [
  {
    method: 'GET',
    query: [{ name: 'license', type: 'string', required: false }],
    body: [],
    path: `${prefix}`,
    middlewares: ['track-ip']
  }
];

export default licensePlates;
