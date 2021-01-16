'use strict';

import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

import Base from './base';

export default class ABBank extends Base {
  public async getForexRates() {
    const { codes } = this;
    const url: string = 'https://abbank.vn/tin-co-dong/ty-gia-ngoai-te-abbank.html';
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.text())
        .then((body: string) => {
          const $: cheerio.Root = cheerio.load(body);
          const rates = $('table.Table tbody tr')
            .get()
            .map(item => {
              const $item = $(item);
              const code: string =
                $item.find('td:nth-child(1)').text().trim().slice(0, 3).toUpperCase() || '';
              const regex: RegExp = /[&#,]/g;
              const buyCash: number =
                parseFloat($item.find('td:nth-child(2)').text().trim().replace(regex, '')) || 0;
              const buyTransfer: number =
                parseFloat($item.find('td:nth-child(3)').text().trim().replace(regex, '')) || 0;
              const sellTransfer: number =
                parseFloat($item.find('td:nth-child(4)').text().trim().replace(regex, '')) || 0;
              const sellCash: number =
                parseFloat($item.find('td:nth-child(5)').text().trim().replace(regex, '')) || 0;
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
}
