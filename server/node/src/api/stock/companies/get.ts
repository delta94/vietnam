'use strict';

import { Request, Response } from 'express';

import { stockService } from '../../../services';

export default async (req: Request, res: Response) => {
  const companies = await stockService.getCompanies();
  return res.json(companies);
};
