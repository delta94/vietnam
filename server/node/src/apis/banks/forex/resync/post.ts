'use strict';

import { Request, Response } from 'express';

import { banksService } from '../../../../services';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const { time = {} } = req.body;
  await banksService.syncForexRates(time);
  return res.json({ status: 'OK' });
};
