'use strict';

import { Request, Response } from 'express';

import { banksService } from '../../../../services';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const { id = '' } = req.body;
  const message: string = await banksService.syncForexRatesById(id);
  return res.json({ status: message });
};
