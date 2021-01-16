'use strict';

import * as _ from 'lodash';
import { Request, Response } from 'express';

import { newsService } from '../../../services';

export default async (req: Request, res: Response): Promise<Response> => {
  const category: string = _.get(req, 'query.category', '').toString() || '';
  const source: string = _.get(req, 'query.source', '').toString() || '';
  const articles = await newsService.getArticles(source, category);
  return res.json(articles);
};
