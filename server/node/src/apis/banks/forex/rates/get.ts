'use strict';

import * as _ from 'lodash';
import { Request, Response } from 'express';

import { banksService } from '../../../../services';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const id: string = _.get(req, 'query.id', '');
  const rates = await banksService.getForexRatesByBank(id);
  return res.json(rates);
};
