'use strict';

import * as _ from 'lodash';
import { Request, Response, NextFunction } from 'express';

import { IRoute, IRouteParameter } from '../../global/interfaces';
import routes from '../../routes';

export default async (req: Request, res: Response, next: NextFunction) => {
  const path: string = _.get(req, 'route.path', '');
  const endpoint: IRoute = routes.find(route => `/api/${route.path}` === path) || {
    method: 'OPTION',
    path: '',
    middlewares: [],
    query: [],
    body: []
  };
  const { query = [], body = [] } = endpoint;

  if (_.isEmpty(query) && _.isEmpty(body)) {
    return next();
  }

  if (!_.isEmpty(query)) {
    const message = processQueryRequest(req, query);
    if (message) {
      return res.status(400).json({ error: true, message });
    }
  }

  if (!_.isEmpty(body)) {
    const message = processBodyRequest(req, body);
    if (message) {
      return res.status(400).json({ error: true, message });
    }
  }

  next();
};

const processQueryRequest = (req: Request, query: Array<IRouteParameter> = []): string => {
  for (const parameter of query) {
    const { name, type, required = false, defaultValue = '' } = parameter;
    if (required && (_.isUndefined(req.query[name]) || !req.query[name])) {
      if (!defaultValue) {
        return `Missing required query string "${name}"`;
      } else {
        req.query[name] = defaultValue;
      }
    }
  }
  return '';
};

const processBodyRequest = (req: Request, body: Array<IRouteParameter> = []): string => {
  for (const parameter of body) {
    const { name, type, required = false, defaultValue = '' } = parameter;
    if (required && (_.isUndefined(req.body[name]) || !req.body[name])) {
      if (!defaultValue) {
        return `Missing required request body "${name}"`;
      } else {
        req.body[name] = defaultValue;
      }
    }
  }
  return '';
};
