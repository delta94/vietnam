'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'ethnic-minorities';

const ethnicMinorities: Array<IRoute> = [
  {
    method: 'GET',
    query: [{ name: 'type_en', type: 'string', required: false }],
    body: [],
    path: `${prefix}`,
    middlewares: ['track-ip']
  }
];

export default ethnicMinorities;
