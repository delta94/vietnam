'use strict';

import * as _ from 'lodash';
import { Request, Response } from 'express';

import { usaService } from '../../../services';

export default async (req: Request, res: Response) => {
  const chamber: string = _.get(req, 'query.chamber', 'house');
  const congress: number = parseInt(_.get(req, 'query.congress', '117'), 10);
  const members = await usaService.getCongressMembers(chamber, congress);
  return res.json(members);
};
