'use strict';

import { IRoute } from '../global/interfaces';

const prefix: string = 'x';

const xAuth: Array<IRoute> = [
  {
    method: 'POST',
    query: [],
    body: [
      { name: 'username', type: 'string', required: true },
      { name: 'password', type: 'string', required: true }
    ],
    path: `${prefix}/auth/sign-in`,
    middlewares: []
  },
  {
    method: 'POST',
    query: [],
    body: [
      { name: 'email', type: 'string', required: true },
      { name: 'phoneNumber', type: 'string', required: true },
      { name: 'password', type: 'string', required: true }
    ],
    path: `${prefix}/auth/sign-up`,
    middlewares: []
  }
];

const xAddresses: Array<IRoute> = [
  {
    method: 'GET',
    query: [],
    body: [],
    path: `${prefix}/settings/addresses`,
    middlewares: ['authentication/x-user']
  },
  {
    method: 'POST',
    query: [],
    body: [],
    path: `${prefix}/settings/addresses`,
    middlewares: ['authentication/x-user']
  },
  {
    method: 'DELETE',
    query: [],
    body: [],
    path: `${prefix}/settings/addresses`,
    middlewares: ['authentication/x-user']
  },
  {
    method: 'PATCH',
    query: [],
    body: [],
    path: `${prefix}/settings/addresses/primary`,
    middlewares: ['authentication/x-user']
  }
];

const xEmails: Array<IRoute> = [
  {
    method: 'GET',
    query: [],
    body: [],
    path: `${prefix}/settings/emails`,
    middlewares: ['authentication/x-user']
  },
  {
    method: 'POST',
    query: [],
    body: [],
    path: `${prefix}/settings/emails`,
    middlewares: ['authentication/x-user']
  },
  {
    method: 'DELETE',
    query: [],
    body: [],
    path: `${prefix}/settings/emails`,
    middlewares: ['authentication/x-user']
  },
  {
    method: 'PATCH',
    query: [],
    body: [],
    path: `${prefix}/settings/emails/primary`,
    middlewares: ['authentication/x-user']
  }
];

const xPhoneNumbers: Array<IRoute> = [
  {
    method: 'GET',
    query: [],
    body: [],
    path: `${prefix}/settings/phone-numbers`,
    middlewares: ['authentication/x-user']
  },
  {
    method: 'POST',
    query: [],
    body: [],
    path: `${prefix}/settings/phone-numbers`,
    middlewares: ['authentication/x-user']
  },
  {
    method: 'DELETE',
    query: [],
    body: [],
    path: `${prefix}/settings/phone-numbers`,
    middlewares: ['authentication/x-user']
  },
  {
    method: 'PATCH',
    query: [],
    body: [],
    path: `${prefix}/settings/phone-numbers/primary`,
    middlewares: ['authentication/x-user']
  }
];

const xProfile: Array<IRoute> = [
  {
    method: 'GET',
    query: [],
    body: [],
    path: `${prefix}/settings/profile`,
    middlewares: ['authentication/x-user']
  },
  {
    method: 'PATCH',
    query: [],
    body: [],
    path: `${prefix}/settings/profile`,
    middlewares: ['authentication/x-user']
  }
];

const xApps: Array<IRoute> = [
  {
    method: 'GET',
    query: [],
    body: [],
    path: `${prefix}/apps/transactions`,
    middlewares: ['authentication/x-user']
  },
  {
    method: 'POST',
    query: [],
    body: [],
    path: `${prefix}/apps/search`,
    middlewares: ['authentication/x-user']
  },
  {
    method: 'POST',
    query: [],
    body: [],
    path: `${prefix}/apps/pay`,
    middlewares: ['authentication/x-user']
  },
  {
    method: 'POST',
    query: [],
    body: [],
    path: `${prefix}/apps/request/send`,
    middlewares: ['authentication/x-user']
  },
  {
    method: 'POST',
    query: [],
    body: [],
    path: `${prefix}/apps/request/confirm`,
    middlewares: ['authentication/x-user']
  }
];

const x: Array<IRoute> = [].concat(xAuth, xAddresses, xEmails, xPhoneNumbers, xProfile, xApps);

export default x;
