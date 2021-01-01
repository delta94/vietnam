'use strict';

import { Request, Response } from 'express';

import { stockService } from '../../../services';

export default async (req: Request, res: Response) => {
  const data: any = await stockService.getTopRealTimeStock();
  return res.json(data);
};
