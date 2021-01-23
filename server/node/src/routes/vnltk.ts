'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'visas';

const visas: Array<IRoute> = [
  { method: 'GET', query: [], body: [], path: `${prefix}`, middlewares: [] }
];

export default visas;
