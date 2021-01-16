'use strict';

import * as _ from 'lodash';

import { google, news } from '../libs';
export default class NewsService {
  public async getArticles(source: string, category: string): Promise<Array<any>> {
    if (source) return await news.getArticles(source, category);
    const sources = news.getSources();
    return new Promise(resolve => {
      Promise.all(
        sources.map(async (source: string) => {
          return await news.getArticles(source, category);
        })
      )
        .then(res => {
          const articles = _.flattenDeep(res);
          resolve(articles);
        })
        .catch(error => {
          console.error('getArticles() error', error);
          resolve([]);
        });
    });
  }

  public getCategories(source: string): Array<string> {
    if (source) return news.getCategories(source);
    const sources = news.getSources();
    let categories = [];
    for (const source of sources) {
      categories = categories.concat(news.getCategories(source));
    }
    return _.uniq(_.flattenDeep(categories)).sort();
  }

  public getSources(): Array<string> {
    return news.getSources();
  }

  public async getGoogleTrends(country: string): Promise<Array<string>> {
    return await google.getTrends(country);
  }
}
