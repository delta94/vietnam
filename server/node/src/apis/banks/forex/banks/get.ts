'use strict';

import { Request, Response } from 'express';

import { banksService } from '../../../../services';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const banks: Array<any> = await banksService.getForexBanks();
  return res.json(banks);
};
