'use strict';

import * as _ from 'lodash';
import { Request, Response } from 'express';

import { banksService } from '../../../../services';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const rates = await banksService.getForexRates();
  return res.json(rates);
};
