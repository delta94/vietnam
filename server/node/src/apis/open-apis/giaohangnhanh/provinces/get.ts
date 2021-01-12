'use strict';

import { Request, Response } from 'express';

import { ghn } from '../../../../libs';

export default async (req: Request, res: Response) => {
  const provinces: any = await ghn.address.getProvinces();
  return res.json(provinces);
};
