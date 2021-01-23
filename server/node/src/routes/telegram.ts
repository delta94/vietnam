'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'telegram';

const telegram: Array<IRoute> = [
  { method: 'POST', query: [], body: [], path: `${prefix}`, middlewares: [] }
];

export default telegram;
