'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = `calendar`;

const calendar: Array<IRoute> = [
  { method: `POST`, path: `${prefix}/solar2lunar`, middlewares: ['track-ip'] },
  { method: `POST`, path: `${prefix}/lunar2solar`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/lunar/can`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/lunar/chi`, middlewares: ['track-ip'] },
  { method: `POST`, path: `${prefix}/lunar/can-chi`, middlewares: ['track-ip'] }
];

export default calendar;
