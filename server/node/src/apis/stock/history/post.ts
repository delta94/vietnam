'use strict';

import { Request, Response } from 'express';

import { stockService } from '../../../services';

export default async (req: Request, res: Response) => {
  const defaultTo = Date.now();
  const defaultFrom = defaultTo - 60 * 60 * 24 * 365 * 1000;
  let { symbol = '', from = defaultFrom, to = defaultTo } = req.body;
  const history: Array<any> = await stockService.getHistoryFromDB({ symbol, from, to });
  return res.json(history);
};
