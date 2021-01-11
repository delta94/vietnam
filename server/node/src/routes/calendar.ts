'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = `calendar`;

const calendar: Array<IRoute> = [
  {
    method: `POST`,
    query: [],
    body: [
      { name: 'year', required: true, type: 'number' },
      { name: 'month', required: true, type: 'number' },
      { name: 'date', required: true, type: 'number' }
    ],
    path: `${prefix}/solar2lunar`,
    middlewares: []
  },
  {
    method: `POST`,
    query: [],
    body: [
      { name: 'year', required: true, type: 'number' },
      { name: 'month', required: true, type: 'number' },
      { name: 'date', required: true, type: 'number' }
    ],
    path: `${prefix}/lunar2solar`,
    middlewares: []
  },
  { method: `GET`, query: [], body: [], path: `${prefix}/lunar/can`, middlewares: [] },
  { method: `GET`, query: [], body: [], path: `${prefix}/lunar/chi`, middlewares: [] },
  {
    method: `POST`,
    query: [],
    body: [
      { name: 'year', required: true, type: 'number' },
      { name: 'month', required: true, type: 'number' },
      { name: 'date', required: true, type: 'number' }
    ],
    path: `${prefix}/lunar/can-chi`,
    middlewares: []
  }
];

export default calendar;
