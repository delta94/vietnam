'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'music';

const music: Array<IRoute> = [
  { method: 'GET', query: [], body: [], path: `${prefix}`, middlewares: [] },
  { method: 'GET', query: [], body: [], path: `${prefix}/artists`, middlewares: [] }
];

export default music;
