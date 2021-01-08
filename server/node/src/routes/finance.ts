'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'finance';

const finance: Array<IRoute> = [
  { method: 'GET', query: [], body: [], path: `${prefix}`, middlewares: ['track-ip'] },
  { method: 'GET', query: [], body: [], path: `${prefix}/companies`, middlewares: ['track-ip'] },
  { method: 'GET', query: [], body: [], path: `${prefix}/top`, middlewares: ['track-ip'] },
  {
    method: 'POST',
    query: [],
    body: [
      { name: 'symbol', type: 'string', required: true },
      { name: 'from', type: 'number', required: true },
      { name: 'to', type: 'number', required: true }
    ],
    path: `${prefix}/history`,
    middlewares: ['track-ip']
  },
  {
    method: 'POST',
    query: [],
    body: [
      { name: 'from', type: 'number', required: true },
      { name: 'to', type: 'number', required: true }
    ],
    path: `${prefix}/highlights`,
    middlewares: ['track-ip']
  },
  {
    method: 'POST',
    query: [],
    body: [
      { name: 'from', type: 'number', required: true },
      { name: 'to', type: 'number', required: true }
    ],
    path: `${prefix}/potentials`,
    middlewares: ['track-ip']
  },
  {
    method: 'POST',
    query: [],
    body: [
      { name: 'buy', type: 'number', required: true },
      { name: 'sell', type: 'number', required: true },
      { name: 'volume', type: 'number', required: true }
    ],
    path: `${prefix}/profit`,
    middlewares: ['track-ip']
  }
];

export default finance;
