'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'history';

const history: Array<IRoute> = [
  { method: 'GET', query: [], body: [], path: `${prefix}`, middlewares: [] },
  { method: 'GET', query: [], body: [], path: `${prefix}/dynasties`, middlewares: [] }
];

export default history;
