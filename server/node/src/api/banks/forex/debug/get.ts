'use strict';

import { Request, Response } from 'express';

import { banksService } from '../../../../services';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const data = await banksService.importForexRatesFromAllVietNamBanks();
  return res.json(data);
};
