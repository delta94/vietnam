'use strict';

import { Request, Response } from 'express';
import * as _ from 'lodash';
import vnn from 'vietnamnews';

export default async (req: Request, res: Response): Promise<Response> => {
  const country: string = _.get(req, 'query.country', 'vietnam') || 'vietnam';
  const trends = await vnn.getGoogleTrends(country);
  return res.json(trends);
};
