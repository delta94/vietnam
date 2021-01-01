'use strict';

import { Request, Response } from 'express';

import { stockService } from '../../../services';

export default async (req: Request, res: Response) => {
  const defaultTo = Date.now();
  const defaultFrom = defaultTo - 60 * 60 * 24 * 365 * 1000;
  let { from = defaultFrom, to = defaultTo } = req.body;
  const highlights: Array<any> = await stockService.processHighlights({ from, to });
  return res.json(highlights);
};
