'use strict';

import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

export default class MSB {
  public async getForexRates() {
    const url: string = 'https://www.msb.com.vn/';
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.text())
        .then((body: string) => {
          const $: cheerio.Root = cheerio.load(body);
          const rates = $('form#formExchangeRateMobile table tbody#tableExchangeRateMobile tr')
            .get()
            .map(item => {
              const $item = $(item);
              const code: string = $item.find('td:nth-child(1)').text().trim() || '';
              const regex: RegExp = /[&#,-]/g;
              const buyCash: number =
                parseFloat($item.find('td:nth-child(2)').text().trim().replace(regex, '')) || 0;
              const buyTransfer: number = buyCash;
              const sellCash =
                parseFloat($item.find('td:nth-child(3)').text().trim().replace(regex, '')) || 0;
              const sellTransfer: number = sellCash;
              return { code, buyCash, buyTransfer, sellCash, sellTransfer };
            })
            .filter(rate => {
              const { code = '', buyCash = 0, buyTransfer, sellCash = 0, sellTransfer = 0 } = rate;
              return code && (buyCash || buyTransfer) && (sellCash || sellTransfer);
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
}
