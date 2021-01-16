'use strict';

import { Request, Response } from 'express';
import * as _ from 'lodash';

import { newsService } from '../../../services';

export default async (req: Request, res: Response): Promise<Response> => {
  const country: string = _.get(req, 'query.country', 'vietnam') || 'vietnam';
  const d: Date = new Date();
  const year: number = d.getFullYear();
  const month: number = d.getMonth() + 1;
  const date: number = d.getDate();
  const hour: number = d.getHours();
  const trends: Array<string> = await newsService.getGoogleTrends(country);
  const total: number = trends.length;
  return res.json({ year, month, date, hour, total, trends });
};
