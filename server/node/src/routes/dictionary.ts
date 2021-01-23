'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'dictionary';

const dictionary: Array<IRoute> = [
  { method: 'GET', query: [], body: [], path: `${prefix}`, middlewares: [] },
  { method: 'POST', query: [], body: [], path: `${prefix}/number2text`, middlewares: [] },
  { method: 'POST', query: [], body: [], path: `${prefix}/latinize`, middlewares: [] }
];

export default dictionary;
