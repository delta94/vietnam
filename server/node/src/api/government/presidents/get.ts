'use strict';

import { Request, Response } from 'express';

import vietnamgovernment from 'vietnamgovernment';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const presidents = vietnamgovernment.getPresidents();
  return res.json(presidents);
};
