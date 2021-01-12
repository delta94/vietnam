'use strict';

import * as _ from 'lodash';
import { Request, Response } from 'express';

import { vietcetera } from '../../../libs';

export default async (req: Request, res: Response) => {
  const type: any = _.get(req, 'query.type', 'latest');
  const basicArticles: any = await vietcetera.getArticles({ type });
  const articles = basicArticles.map((article: any = {}) => {
    const { title = '', slug = '', language = '', publishDate = '', excerpt = '' } = article;
    const url = language && slug ? `https://vietcetera.com/${language.toLowerCase()}/${slug}` : '';
    const description = excerpt.replace('<p>', '').replace('</p>', '');
    return { title, url, publishDate, description };
  });
  return res.json(articles);
};
