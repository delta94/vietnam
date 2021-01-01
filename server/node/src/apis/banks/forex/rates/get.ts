'use strict';

import { Request, Response } from 'express';

import { banksService } from '../../../../services';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const { currencies, data } = await banksService.getForexRatesFromAllVietNamBanks();
  return res.json({ currencies, data });
};
