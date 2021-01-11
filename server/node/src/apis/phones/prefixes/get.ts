'use strict';

import * as _ from 'lodash';
import { Request, Response } from 'express';

import { phonesService } from '../../../services';

export default async (req: Request, res: Response) => {
  const prefix: string = _.get(req, 'query.prefix', '');
  const prefixes = await phonesService.getPrefixes(prefix);
  return res.json(prefixes);
};