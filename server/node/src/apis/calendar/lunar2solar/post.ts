'use strict';

import * as _ from 'lodash';
import { Request, Response } from 'express';

import { calendar } from 'vnapis';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const d: Date = new Date();
  const yyyy: number = parseInt(_.get(req, 'body.year', d.getFullYear().toString()), 10);
  const mm: number = parseInt(_.get(req, 'body.month', (d.getMonth() + 1).toString()), 10);
  const dd: number = parseInt(_.get(req, 'body.date', d.getDate(), toString()), 10);
  const { date, month, year } = calendar.convertLunarToSolar(dd, mm, yyyy);
  return res.json({ date, month, year });
};
