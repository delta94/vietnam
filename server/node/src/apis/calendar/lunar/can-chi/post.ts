'use strict';

import { Request, Response } from 'express';

import { calendar } from 'vnapis';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const d = new Date();
  const { yyyy = d.getFullYear(), mm = d.getMonth() + 1, dd = d.getDate() } = req.body;
  const { date, month, year } = calendar.convertSolarToLunar(dd, mm, yyyy);
  const canChiOfYear = calendar.getCanChiOfYear(year);
  const canChiOfMonth = calendar.getCanChiOfMonth(month, year);
  const canChiOfDate = calendar.getCanChiOfDate(date, month, year);
  const result = `năm ${canChiOfYear} tháng ${canChiOfMonth} ngày ${canChiOfDate}`.toLowerCase();
  return res.json({ result });
};
