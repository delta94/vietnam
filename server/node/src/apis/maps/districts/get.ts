'use strict';

import { Request, Response } from 'express';

import { mapsService } from '../../../services';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const districts = await mapsService.getDistricts();
  return res.json(districts);
};
