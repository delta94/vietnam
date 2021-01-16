'use strict';

import fetch from 'node-fetch';
import * as xml2json from 'xml2json';

import Utils from '../utils';

export default class CafeBiz extends Utils {
  private source: string = 'CafeBiz';
  private sourceURL: string = 'https://cafebiz.vn';
  private rss: any = {
    general: 'https://cafebiz.vn/trang-chu.rss',
    trending: 'https://cafebiz.vn/thoi-su.rss',
    latest: 'https://cafebiz.vn/tin-tuc.rss',
    law: 'https://cafebiz.vn/phap-luat.rss',
    economy: 'https://cafebiz.vn/kinh-te-vi-mo.rss',
    finance: 'https://cafebiz.vn/tai-chinh.rss',
    policy: 'https://cafebiz.vn/chinh-sach.rss',
    business: 'https://cafebiz.vn/cau-chuyen-kinh-doanh.rss',
    management: 'https://cafebiz.vn/quan-tri.rss',
    jobs: 'https://cafebiz.vn/nghe-nghiep.rss',
    people: 'https://cafebiz.vn/nhan-vat.rss',
    brand: 'https://cafebiz.vn/thuong-hieu.rss',
    profile: 'https://cafebiz.vn/ho-so.rss',
    technology: 'https://cafebiz.vn/cong-nghe.rss',
    company: 'https://cafebiz.vn/doanh-nghiep-cong-nghe.rss',
    startup: 'https://cafebiz.vn/startup.rss',
    science: 'https://cafebiz.vn/khoa-hoc.rss',
    health: 'https://cafebiz.vn/suc-khoe.rss',
    lifestyle: 'https://cafebiz.vn/phong-cach.rss',
    education: 'https://cafebiz.vn/giao-duc.rss',
    social: 'https://cafebiz.vn/song.rss'
  };

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
