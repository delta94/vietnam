'use strict';

import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

import Base from './base';

export default class ACB extends Base {
  public async getForexRates() {
    const { codes } = this;
    const d: Date = new Date();
    const dd: string = this.addZero(d.getDate());
    const mm: string = this.addZero(d.getMonth() + 1);
    const yyyy: number = d.getFullYear();
    const date: string = `${dd}/${mm}/${yyyy}`;
    const lannt: string = await this.getTime(date);
    const url: string = `https://acb.com.vn/ACBComponent/jsp/html/vn/exchange/getlisttygia.jsp?txtngaynt=${date}&lannt=${lannt}`;
    console.log('url', url);
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.text())
        .then((body: string) => {
          const $: cheerio.Root = cheerio.load(body);
          const rates = $('.wrap-content-search-big table tr')
            .get()
            .map(item => {
              const $item = $(item);
              const code: string =
                $item.find('td:nth-child(2)').text().trim().slice(0, 3).toUpperCase() || '';
              const regex: RegExp = /[&#,]/g;
              const buyCash: number =
                parseFloat($item.find('td:nth-child(3)').text().trim().replace(regex, '')) || 0;
              const buyTransfer: number =
                parseFloat($item.find('td:nth-child(4)').text().trim().replace(regex, '')) || 0;
              const sellCash: number =
                parseFloat($item.find('td:nth-child(5)').text().trim().replace(regex, '')) || 0;
              const sellTransfer: number =
                parseFloat($item.find('td:nth-child(6)').text().trim().replace(regex, '')) || 0;
              return { code, buyCash, buyTransfer, sellCash, sellTransfer };
            })
            .filter(rate => {
              const {
                code = '',
                buyCash = 0,
                buyTransfer = 0,
                sellCash = 0,
                sellTransfer = 0
              } = rate;
              return (
                code &&
                codes.includes(code) &&
                (buyCash || buyTransfer) &&
                (sellCash || sellTransfer)
              );
            })
            .sort((a, b) => (a.code > b.code ? 1 : -1));
          resolve(rates);
        })
        .catch((error: Error) => {
          console.error(error);
          resolve([]);
        });
    });
  }

  private async getTime(date: string): Promise<string> {
    const url: string = `https://acb.com.vn/ACBComponent/jsp/html/vn/exchange/getlan.jsp?txtngaynt=${date}&cmd=EXCHANGE`;
    let data: string = (await fetch(url).then(res => res.text())) || '0';
    const startIndex: number = data.indexOf('>') + 1;
    const endIndex: number = data.indexOf('</option>');
    const time: string = data.slice(startIndex, endIndex);
    return time;
  }
}
