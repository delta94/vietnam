'use strict';

import * as _ from 'lodash';
import { Request, Response } from 'express';

import { sportsService } from '../../../services';

export default async (req: Request, res: Response) => {
  const sport: string = _.get(req, 'query.sport', '');
  const clubs: string | Array<any> = await sportsService.getClubs(sport);
  return res.json(clubs);
};
