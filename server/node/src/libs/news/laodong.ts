'use strict';

import fetch from 'node-fetch';
import * as xml2json from 'xml2json';

import Utils from '../utils';

export default class LaoDong extends Utils {
  private source: string = 'Lao Động';
  private sourceURL: string = 'https://laodong.vn';
  private rss: any = { general: 'https://laodong.vn/rss/home.rss' };

  public async getArticles(category: string): Promise<Array<any>> {
    const { rss = {}, source = '', sourceURL = '' } = this;
    const categories = this.getCategories();
    if (!category || !categories.includes(category)) category = 'general';
    const url = rss[category];
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.text())
        .then((xml: string) => {
          const jsonString: string = xml2json.toJson(xml);
          const data = this.parseJSON(jsonString, {});
          const { rss = {} } = data;
          const { channel = {} } = rss;
          const { item = [] } = channel;
          const articles = item.map(article => {
            const { title, link: url, description, pubDate: publishedDate } = article;
            return { title, url, description, publishedDate, source, sourceURL };
          });
          resolve(articles);
        })
        .catch((error: Error) => {
          console.error(error);
          resolve([]);
        });
    });
  }
  public getCategories(): Array<string> {
    const { rss = {} } = this;
    return Object.keys(rss).sort();
  }
}
