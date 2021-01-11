'use strict';

import { IRoute } from '../global/interfaces';

const languages: Array<IRoute> = [
  { method: 'POST', query: [], body: [], path: 'vnltk/number2text', middlewares: [] },
  { method: 'POST', query: [], body: [], path: 'vnltk/latinize', middlewares: [] }
];

export default languages;
