'use strict';

import { Request, Response } from 'express';

import { mapsService } from '../../../services';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const wards = await mapsService.getWards();
  return res.json(wards);
};
