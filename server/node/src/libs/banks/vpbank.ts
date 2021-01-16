'use strict';

import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

export default class VPBank {
  public async getForexRates(): Promise<Array<any>> {
    const url: string = 'https://www.vpbank.com.vn/en/api/foreignexchange/getlastestfe';
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((res: any = {}) => {
          const { data = [] } = res;
          const rates = data
            .map(item => {
              const {
                Symbol: code = '',
                NameOfCurrency: name = '',
                Buy = '',
                Transfer = '',
                Sell = '',
                Icon: icon = ''
              } = item;
              const regex: RegExp = /[&#,-]/g;
              const buyCash: number = parseFloat(Buy.replace(regex, '').trim()) || 0;
              const buyTransfer: number = parseFloat(Transfer.replace(regex, '').trim()) || 0;
              const sellCash: number = parseFloat(Sell.replace(regex, '').trim()) || 0;
              const sellTransfer: number = sellCash;
              return { code, name, buyCash, buyTransfer, sellCash, sellTransfer, icon };
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
        .catch((error: Error) => {
          console.error(error);
          resolve([]);
        });
    });
  }
}