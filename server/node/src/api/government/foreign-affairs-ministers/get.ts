'use strict';

import { Request, Response } from 'express';

import vietnamgovernment from 'vietnamgovernment';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const ministers = vietnamgovernment.getForeignAffairsMinisters();
  return res.json(ministers);
};
