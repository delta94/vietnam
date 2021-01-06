'use strict';

import { Request, Response } from 'express';

import { phonesService } from '../../../services';

export default async (req: Request, res: Response) => {
  const providers = await phonesService.getProviders();
  return res.json(providers);
};
