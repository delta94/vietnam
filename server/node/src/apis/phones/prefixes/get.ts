'use strict';

import { Request, Response } from 'express';

import { phone } from 'vnapis';

export default async (req: Request, res: Response) => {
  const prefixes = phone.getPrefixes();
  return res.json(prefixes);
};
