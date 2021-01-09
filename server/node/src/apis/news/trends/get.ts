'use strict';

import { Request, Response } from 'express';
import * as _ from 'lodash';
import vnn from 'vietnamnews';

export default async (req: Request, res: Response): Promise<Response> => {
  const country: string = _.get(req, 'query.country', 'vietnam') || 'vietnam';
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const hour = d.getHours();
  const trends = await vnn.getGoogleTrends(country);
  return res.json({ year, month, date, hour, trends });
};
