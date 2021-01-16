'use strict';

import * as _ from 'lodash';
import { Request, Response, NextFunction } from 'express';

export default async (req: Request, res: Response, next: NextFunction) => {
  const apiKey: string = _.get(req, 'headers.api-key', '');

  console.log('API KEY', apiKey);

  next();
};
