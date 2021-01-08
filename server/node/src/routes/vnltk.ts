'use strict';

import { IRoute } from '../global/interfaces';

const languages: Array<IRoute> = [
  { method: 'POST', query: [], body: [], path: 'vnltk/number2text', middlewares: ['track-ip'] },
  { method: 'POST', query: [], body: [], path: 'vnltk/latinize', middlewares: ['track-ip'] }
];

export default languages;
