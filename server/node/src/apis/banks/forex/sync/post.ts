'use strict';

import { Request, Response } from 'express';

import { banksService } from '../../../../services';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const { id = '' } = req.body;
  await banksService.syncForexRatesByBankId(id);
  return res.json({ status: 'OK' });
};
