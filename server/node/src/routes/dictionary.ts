'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'dictionary';

const dictionary: Array<IRoute> = [
  { method: 'GET', query: [], body: [], path: `${prefix}`, middlewares: [] }
];

export default dictionary;
