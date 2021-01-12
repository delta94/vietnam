'use strict';

import * as _ from 'lodash';
import { Request, Response } from 'express';

import { youTube } from '../../../libs';

export default async (req: Request, res: Response) => {
  const categories = await youTube.getVideoCategories();
  return res.json(categories);
};
