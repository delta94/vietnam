'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'finance';

const finance: Array<IRoute> = [
  { method: 'GET', query: [], body: [], path: `${prefix}`, middlewares: [] },
  { method: 'GET', query: [], body: [], path: `${prefix}/companies`, middlewares: [] },
  {
    method: 'GET',
    query: [
      { name: 'symbol', type: 'string', required: true },
      { name: 'from', type: 'number', required: true },
      { name: 'to', type: 'number', required: true }
    ],
    body: [],
    path: `${prefix}/history`,
    middlewares: []
  },
  { method: 'GET', query: [], body: [], path: `${prefix}/top`, middlewares: [] },
  {
    method: 'POST',
    query: [],
    body: [
      { name: 'from', type: 'number', required: true },
      { name: 'to', type: 'number', required: true }
    ],
    path: `${prefix}/highlights`,
    middlewares: []
  },
  {
    method: 'POST',
    query: [],
    body: [
      { name: 'from', type: 'number', required: true },
      { name: 'to', type: 'number', required: true }
    ],
    path: `${prefix}/potentials`,
    middlewares: []
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
    middlewares: []
  }
];

export default finance;
