'use strict';

import { Request, Response } from 'express';

import { phone } from 'vnapis';

export default async (req: Request, res: Response) => {
  const providers = phone.getProviders();
  return res.json(providers);
};
