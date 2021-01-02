'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'finance';

const finance: Array<IRoute> = [
  { method: 'GET', path: `${prefix}`, middlewares: ['track-ip'] },
  { method: 'GET', path: `${prefix}/top`, middlewares: ['track-ip'] },
  { method: 'POST', path: `${prefix}/history`, middlewares: ['track-ip'] },
  { method: 'POST', path: `${prefix}/highlights`, middlewares: ['track-ip'] },
  { method: 'POST', path: `${prefix}/potentials`, middlewares: ['track-ip'] },
  { method: 'GET', path: `${prefix}/companies`, middlewares: ['track-ip'] },
  { method: 'POST', path: `${prefix}/profit`, middlewares: ['track-ip'] }
];

export default finance;
