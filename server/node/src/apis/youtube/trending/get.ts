'use strict';

import * as _ from 'lodash';
import { Request, Response } from 'express';

import { youTube } from '../../../libs';

export default async (req: Request, res: Response) => {
  const categoryId: number = _.get(req, 'query.categoryId', 0);
  const max: number = _.get(req, 'query.max', 50);
  const videos = await youTube.getMostPopularVideos(categoryId, max);
  return res.json(videos);
};
