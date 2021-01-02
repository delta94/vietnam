'use strict';

import { Request, Response } from 'express';

import { mapsService } from '../../../services';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const postalCodes = await mapsService.getPostalCodes();
  return res.json(postalCodes);
};
