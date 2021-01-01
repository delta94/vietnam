'use strict';

import { Request, Response } from 'express';

import { phone } from 'vnapis';

export default async (req: Request, res: Response) => {
  const { number = '' } = req.body;
  const provider: string = phone.getProviderFromPhoneNumber(number);
  return res.json({ provider });
};
