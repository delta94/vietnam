'use strict';

import * as _ from 'lodash';
import { Request, Response } from 'express';

import { historyService } from '../../../services';

export default async (req: Request, res: Response) => {
  const dynasties: Array<any> = await historyService.getDynasties();
  return res.json(dynasties);
};
