'use strict';

import { Request, Response } from 'express';

import { licensePlatesService } from '../../services';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const licensePlates = await licensePlatesService.getLicensePlates();
  return res.json(licensePlates);
};
