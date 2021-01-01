'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'government';

const government: Array<IRoute> = [
  { method: `GET`, path: `${prefix}/ministries`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/incumbents`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/general-secretaries`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/presidents`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/prime-ministers`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/national-assembly/chairs`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/national-assembly/members`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/ethnic-minority-affairs-leaders`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/government-inspectorate-leaders`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/government-office-leaders`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/state-bank-governors`, middlewares: ['track-ip'] },
  {
    method: `GET`,
    path: `${prefix}/agriculture-rural-development-ministers`,
    middlewares: ['track-ip']
  },
  { method: `GET`, path: `${prefix}/construction-ministers`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/culture-sports-tourism-ministers`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/education-training-ministers`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/finance-ministers`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/foreign-affairs-ministers`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/health-ministers`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/home-affairs-ministers`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/industry-trade-ministers`, middlewares: ['track-ip'] },
  {
    method: `GET`,
    path: `${prefix}/information-communications-ministers`,
    middlewares: ['track-ip']
  },
  { method: `GET`, path: `${prefix}/justice-ministers`, middlewares: ['track-ip'] },
  {
    method: `GET`,
    path: `${prefix}/labour-invalids-social-affairs-ministers`,
    middlewares: ['track-ip']
  },
  { method: `GET`, path: `${prefix}/national-defence-ministers`, middlewares: ['track-ip'] },
  {
    method: `GET`,
    path: `${prefix}/natural-resources-environment-ministers`,
    middlewares: ['track-ip']
  },
  { method: `GET`, path: `${prefix}/planning-investment-ministers`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/public-security-ministers`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/science-technology-ministers`, middlewares: ['track-ip'] },
  { method: `GET`, path: `${prefix}/transport-ministers`, middlewares: ['track-ip'] }
];

export default government;
