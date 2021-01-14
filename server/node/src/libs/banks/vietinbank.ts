'use strict';

import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

export default class Vietinbank {
  public async getForexRates() {
    const url: string = 'https://www.vietinbank.vn/web/home/en/doc/saving/exrate.html';
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.text())
        .then((body: string) => {
          const $: cheerio.Root = cheerio.load(body);
          const rates: Array<any> = $('table#hor-ex-b tbody tr')
            .get()
            .map(item => {
              const $item: cheerio.Cheerio = $(item);
              const code: string = $item.find('td:nth-child(1)').text().trim() || '';
              const regex: RegExp = /[&#,-]/g;
              const buyCash: number =
                parseFloat($item.find('td:nth-child(3)').text().trim().replace(regex, '')) || 0;
              const buyTransfer: number =
                parseFloat($item.find('td:nth-child(4)').text().trim().replace(regex, '')) || 0;
              const sellCash: number =
                parseFloat($item.find('td:nth-child(5)').text().trim().replace(regex, '')) || 0;
              const sellTransfer: number = sellCash;
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
              return code && (buyCash || buyTransfer) && (sellCash || sellTransfer);
            })
            .sort((a, b) => (a.code > b.code ? 1 : -1));
          resolve(rates);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }
}
