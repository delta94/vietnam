'use strict';

import { Request, Response } from 'express';

import { calendar } from 'vnapis';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const d = new Date();
  const { yyyy = d.getFullYear(), mm = d.getMonth() + 1, dd = d.getDate() } = req.body;
  const { date, month, year } = calendar.convertLunarToSolar(dd, mm, yyyy);
  return res.json({ date, month, year });
};
