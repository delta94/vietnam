'use strict';

import { Request, Response } from 'express';
import vnn from 'vietnamnews';

export default async (req: Request, res: Response): Promise<Response> => {
  const sources = vnn.getSources();
  return res.json(sources);
};
