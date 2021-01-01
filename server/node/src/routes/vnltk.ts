'use strict';

import { IRoute } from '../global/interfaces';

const languages: Array<IRoute> = [
  { method: 'POST', path: 'vnltk/number2text', middlewares: ['track-ip'] },
  { method: 'POST', path: 'vnltk/latinize', middlewares: ['track-ip'] }
];

export default languages;
