'use strict';

import { Request, Response } from 'express';

import vietnamgovernment from 'vietnamgovernment';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const stateBankGovernors = vietnamgovernment.getStateBankGovernors();
  return res.json(stateBankGovernors);
};
