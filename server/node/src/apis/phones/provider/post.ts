'use strict';

import * as _ from 'lodash';
import { Request, Response } from 'express';

import { phonesService } from '../../../services';

export default async (req: Request, res: Response) => {
  const number = _.get(req, 'body.number', '');
  const provider: string = await phonesService.getProviderFromPhoneNumber(number);
  return res.json({ provider });
};
