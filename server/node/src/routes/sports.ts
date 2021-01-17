'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'sports';

const sports: Array<IRoute> = [
  { method: 'GET', query: [], body: [], path: `${prefix}`, middlewares: [] },
  {
    method: 'GET',
    query: [{ name: 'sport_en', type: 'string', required: false }],
    body: [],
    path: `${prefix}/clubs`,
    middlewares: []
  },
  {
    method: 'GET',
    query: [],
    body: [],
    path: `${prefix}/vleague`,
    middlewares: []
  }
];

export default sports;
