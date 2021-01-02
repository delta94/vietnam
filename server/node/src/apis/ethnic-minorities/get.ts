'use strict';

import { Request, Response } from 'express';

import { ethnicMinoritiesService } from '../../services';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const ethnicMinorities = await ethnicMinoritiesService.getEthnicMinorities();
  return res.json(ethnicMinorities);
};
