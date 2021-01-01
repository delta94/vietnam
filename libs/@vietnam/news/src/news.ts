'use strict';

import fetch from 'node-fetch';
import * as Parser from 'rss-parser';

import configs from './configs';
import { IArticle, IOptions, ISource, ITime, IResponse } from './interfaces';

export default class News {
  private parser: Parser = new Parser();
  private sources: Array<ISource> = configs.sources;

  public getCategories(): Array<string> {
    const self = this;
    let keys = self.sources.map(source => {
      const { rss = {} } = source;
      return Object.keys(rss);
    });
    return self
      .flattenDeep(keys)
      .filter((value, index, array) => array.indexOf(value) === index)
      .sort();
  }

  public getSources(): Array<ISource> {
    return this.sources.map(source => {
      const { id, name, url, category, rss } = source;
      const categories = Object.keys(rss).filter(key => rss[key].trim().toLowerCase());
      return { id, name, url, category, categories };
    });
  }

  private processPubDate(pubDate: string): ITime {
    const self = this;
    let [day, datetime] = pubDate.split(',');
    datetime = datetime.trim();
    let [dd = '0', mmm = '', yyyy = '0', time] = datetime.split(' ');
    const date: number = parseInt(dd, 10);
    const month = configs.time.shortMonths.indexOf(mmm.toLowerCase()) + 1;
    const year: number = parseInt(yyyy, 10);
    let [hh = '0', mm = '0', ss = '0'] = time.split(':');
    const hours: number = parseInt(hh, 10);
    const minutes: number = parseInt(mm, 10);
    const seconds: number = parseInt(ss, 10);
    const timestamp: number = new Date(year, month - 1, date, hours, minutes, seconds).getTime();
    const dateString: string = `${year}/${self.addZero(month)}/${self.addZero(date)}`;
    const timeString: string = `${self.addZero(hours)}:${self.addZero(minutes)}`;
    const dateTimeString: string = `${dateString} ${timeString}`;
    return { day, date, month, year, hours, minutes, seconds, timestamp, dateTimeString };
  }

  public async getNews(
    options: IOptions = { sources: [], category: 'general' }
  ): Promise<IResponse> {
    const self = this;
    const categories = self.getCategories();

    let { sources = [], category = 'general' } = options;
    sources = sources.map(source => source.trim().toLowerCase()).filter(source => source);
    category = categories.includes(category.trim().toLowerCase()) ? category : 'general';

    const chosenSources = self.findSources(sources, category);
    if (!chosenSources.length) return { message: 'Cannot find source with category', articles: [] };

    const articles = await self.getNewsFromSources(chosenSources);
    if (!articles.length) return { message: 'No article', articles: [] };

    return { message: 'success', articles };
  }

  private getNewsFromSources(sources: Array<ISource>): Promise<Array<IArticle>> {
    const self = this;
    return new Promise(resolve => {
      Promise.all(
        sources.map(async source => {
          const { name = '', rss = '' } = source;
          return await self.getNewsByRSS(rss, name);
        })
      )
        .then(data => {
          const articles: Array<IArticle> = self
            .flattenDeep(data)
            .sort((a, b) => (b.timestamp > a.timestamp ? 1 : -1));
          resolve(articles);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  private findSources(sources, category): Array<ISource> {
    const self = this;
    const { sources: allSources = [] } = self;
    return allSources
      .filter(source => {
        if (!sources.length) return true;
        const { id = '' } = source;
        return sources.includes(id.toLowerCase());
      })
      .map(source => {
        const { name = '', rss = {} } = source;
        const _rss = rss[category] || '';
        return { name, rss: _rss };
      })
      .filter(source => source.rss);
  }

  private async getNewsByRSS(rss: string, source: string = ''): Promise<Array<IArticle>> {
    const self = this;
    if (!rss) return [];
    try {
      const feed: Parser.Output = (await self.parser.parseURL(rss)) || { items: [] };
      const { items = [] } = feed;
      const articles: Array<IArticle> = items
        .map(article => self.processArticle(article, source))
        .filter(article => article.url)
        .sort((a, b) => (b.timestamp > a.timestamp ? 1 : -1));
      const urls = articles
        .map(article => article.url)
        .filter((value, index, array) => array.indexOf(value) === index);
      return urls.map(url => articles.find(article => article.url === url));
    } catch (error) {
      console.error(source, rss, error);
      return [];
    }
  }

  private processArticle(article: Parser.Item, source: string = ''): IArticle {
    const self = this;
    let { title = '', link = '', pubDate = '', description = '', contentSnippet = '' } = article;
    title = title.trim();
    const url: string = link.trim();
    const _description: string = description.trim() || contentSnippet.trim();
    const {
      day = '',
      year = 0,
      month = 0,
      date = 0,
      hours = 0,
      minutes = 0,
      seconds = 0,
      timestamp = 0,
      dateTimeString = ''
    } = self.processPubDate(pubDate);
    return {
      title,
      url,
      source,
      description: _description,
      pubDate,
      day,
      year,
      month,
      date,
      hours,
      minutes,
      seconds,
      timestamp,
      dateTimeString
    };
  }

  public async getGoogleTrends(country: string = 'vietnam'): Promise<Array<string>> {
    const url: string = 'https://trends.google.com/trends/hottrends/visualize/internal/data';
    return new Promise(resolve => {
      fetch(url, { method: 'GET' })
        .then(res => res.json())
        .then(res => {
          const countries: Array<string> = Object.keys(res).sort();
          if (!countries.includes(country)) {
            let allTerms = [];
            for (const country of countries) {
              const termsByCountry = res[country] || [];
              allTerms = allTerms.concat(termsByCountry);
            }
            allTerms = allTerms.filter(
              (value: string, index: number, array: Array<string>) => array.indexOf(value) === index
            );
            allTerms.sort();
            resolve(allTerms);
          }
          const terms = res[country] || [];
          terms.sort();
          resolve(terms);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  private addZero(i: number = 0): string {
    return i > 9 ? `${i}` : '0' + i.toString();
  }

  public flattenDeep(collection: Array<any>): Array<any> {
    const self = this;
    return collection.reduce((flat, toFlatten) => {
      return flat.concat(Array.isArray(toFlatten) ? self.flattenDeep(toFlatten) : toFlatten);
    }, []);
  }
}
