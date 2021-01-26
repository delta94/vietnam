'use strict';

import * as _ from 'lodash';
import { Request, Response, NextFunction } from 'express';

import { dsUser } from '../../data';
import { jwt } from '../../libs';

export default async (req: Request, res: Response, next: NextFunction) => {
  const xToken: string = _.get(req, 'headers.x-token', '');

  if (!xToken) {
    return res.status(401).json({ message: 'Invalid Token' });
  }

  const { primaryEmail = '' } = jwt.verify(xToken);
  if (!primaryEmail) {
    return res.status(401).json({ message: 'Invalid Token' });
  }

  const user = await dsUser.findOne({ primaryEmail }, { excludedFields: ['_id'] });
  if (!user) {
    return res.status(401).json({ message: 'Invalid Token' });
  }

  res.locals.user = user;

  next();
};
