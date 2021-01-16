'use strict';

import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import * as https from 'https';

import Base from './base';

export default class NCB extends Base {
  public async getForexRates() {
    const { codes } = this;
    const d: Date = new Date();
    const dd: string = this.addZero(d.getDate());
    const mm: string = this.addZero(d.getMonth() + 1);
    const yyyy: number = d.getFullYear();
    const url: string = 'https://www.ncb-bank.vn/vi/ty-gia-tien-te';
    const date: string = `${dd}-${mm}-${yyyy}`;
    const body = { op: 'ajax', date };
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    return new Promise(resolve => {
      fetch(url, { method: 'POST', body: JSON.stringify(body), agent: httpsAgent })
        .then(res => res.text())
        .then((body: string) => {
          const $: cheerio.Root = cheerio.load(body);
          const rates = $('.tb-tygia table.tb-content tbody tr')
            .get()
            .map(item => {
              const $item = $(item);
              const name: string = $item.find('td:nth-child(1)').text().trim() || '';
              const code: string = $item.find('td:nth-child(2)').text().trim().slice(0, 3) || '';
              const regex: RegExp = /[&#.-]/g;
              const buyCash: number =
                parseFloat(
                  $item.find('td:nth-child(3)').text().trim().replace(regex, '').replace(/,/g, '.')
                ) || 0;
              const buyTransfer: number =
                parseFloat(
                  $item.find('td:nth-child(4)').text().trim().replace(regex, '').replace(/,/g, '.')
                ) || 0;
              const sellTransfer: number =
                parseFloat(
                  $item.find('td:nth-child(5)').text().trim().replace(regex, '').replace(/,/g, '.')
                ) || 0;
              const sellCash: number =
                parseFloat(
                  $item.find('td:nth-child(6)').text().trim().replace(regex, '').replace(/,/g, '.')
                ) || 0;
              return { code, name, buyCash, buyTransfer, sellCash, sellTransfer };
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
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }
}
