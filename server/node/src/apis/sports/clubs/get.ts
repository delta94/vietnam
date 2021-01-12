'use strict';

import * as _ from 'lodash';
import { Request, Response } from 'express';

import { sportsService } from '../../../services';

export default async (req: Request, res: Response) => {
  const sport_en: string = _.get(req, 'query.sport_en', '');
  const clubs: Array<any> = await sportsService.getClubs(sport_en);
  return res.json(clubs);
};
