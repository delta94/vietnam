'use strict';

import { Request, Response } from 'express';

import { mapsService } from '../../../services';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const provinces = await mapsService.getProvinces();
  return res.json(provinces);
};
