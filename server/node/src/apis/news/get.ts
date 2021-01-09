'use strict';

import { Request, Response } from 'express';
import * as _ from 'lodash';
import vnn from 'vietnamnews';

export default async (req: Request, res: Response): Promise<Response> => {
  const category: string = _.get(req, 'query.category', 'general').toString() || 'general';
  const sources: string = _.get(req, 'query.sources', '').toString() || '';
  const _sources = sources.split(',');
  const { articles } = await vnn.getNews({ sources: _sources, category });
  return res.json(articles);
};
