'use strict';

import { Request, Response } from 'express';
import * as _ from 'lodash';
import vnn from 'vietnamnews';

export default async (req: Request, res: Response): Promise<Response> => {
  const categories: Array<string> = vnn.getCategories();
  const total: number = categories.length;
  return res.json({ total, categories });
};
