'use strict';

import { Request, Response } from 'express';

import { banksService } from '../../../../services';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const banks: Array<string> = await banksService.getForexBanks();
  const total: number = banks.length;
  return res.json({ total, banks });
};
