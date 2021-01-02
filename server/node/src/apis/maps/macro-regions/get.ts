'use strict';

import { Request, Response } from 'express';

import { mapsService } from '../../../services';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const macroRegions = await mapsService.getMacroRegions();
  return res.json(macroRegions);
};
