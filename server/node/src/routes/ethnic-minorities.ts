'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'ethnic-minorities';

const ethnicMinorities: Array<IRoute> = [
  { method: 'GET', path: `${prefix}`, middlewares: ['track-ip'] }
];

export default ethnicMinorities;
