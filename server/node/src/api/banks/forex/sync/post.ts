'use strict';

import { Request, Response } from 'express';

import { banksService } from '../../../../services';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const { telegramChatId = 0, id = '' } = req.body;
  await banksService.syncForexRatesByBankId(id, { telegramChatId });
  return res.json({ status: 'OK' });
};
