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
    middlewares: ['track-ip']
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
    middlewares: ['track-ip']
  },
  { method: `GET`, query: [], body: [], path: `${prefix}/lunar/can`, middlewares: ['track-ip'] },
  { method: `GET`, query: [], body: [], path: `${prefix}/lunar/chi`, middlewares: ['track-ip'] },
  {
    method: `POST`,
    query: [],
    body: [
      { name: 'year', required: true, type: 'number' },
      { name: 'month', required: true, type: 'number' },
      { name: 'date', required: true, type: 'number' }
    ],
    path: `${prefix}/lunar/can-chi`,
    middlewares: ['track-ip']
  }
];

export default calendar;
