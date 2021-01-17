'use strict';

import * as _ from 'lodash';
import { Request, Response } from 'express';

import { sportsService } from '../../../services';

export default async (req: Request, res: Response) => {
  const data: any = await sportsService.getVLeague();
  return res.json(data);
};
