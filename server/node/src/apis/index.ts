'use strict';

import { Request, Response } from 'express';
import routes from '../routes';

export default app => {
  const base: string = '/api';
  app.get(
    `${base}`,
    (req: Request, res: Response): Response<any> => {
      return res.json({ status: 'OK' });
    }
  );

  routes.forEach(route => {
    const { method, path, middlewares = [] } = route;
    const _method = method.toLowerCase();
    const { default: handler } = require(`./${path}/${_method}`);
    const _middlewares = [];
    for (const middleware of middlewares) {
      const { default: _middleware } = require(`../middlewares/${middleware}`);
      _middlewares.push(_middleware);
    }
    const url: string = `${base}/${path}`;
    console.log({ method, url, middlewares, handler });
    const handlers: Array<any> = [].concat(_middlewares, handler);
    app[_method](url, ...handlers);
  });
};
