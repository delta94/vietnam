'use strict';

import { Request, Response } from 'express';

import { phonesService } from '../../../services';

export default async (req: Request, res: Response) => {
  const prefixes = await phonesService.getPrefixes();
  return res.json(prefixes);
};
