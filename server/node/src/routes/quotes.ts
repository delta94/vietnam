'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'quotes';

const quotes: Array<IRoute> = [
  { method: 'GET', query: [], body: [], path: `${prefix}`, middlewares: [] }
];

export default quotes;
