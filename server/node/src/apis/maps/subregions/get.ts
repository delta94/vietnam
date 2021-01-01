'use strict';

import { Request, Response } from 'express';

import { maps } from 'vnapis';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const subregions = maps.getSubregions();
  return res.json(subregions);
};
