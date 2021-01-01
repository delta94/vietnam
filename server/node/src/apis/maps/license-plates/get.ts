'use strict';

import { Request, Response } from 'express';

import { maps } from 'vnapis';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const licensePlates = maps.getLicensePlates();
  return res.json(licensePlates);
};
