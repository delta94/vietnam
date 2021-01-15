'use strict';

import fetch from 'node-fetch';

import Utils from '../utils';

export default class BaoVietBank extends Utils {
  public async getForexRates() {
    const d: Date = new Date();
    const dd: string = this.addZero(d.getDate());
    const mm: string = this.addZero(d.getMonth() + 1);
    const yyyy: number = d.getFullYear();
    const dateTime: string = `${dd}/${mm}/${yyyy}`;
    const url: string = `https://baovietbank.vn/AdTools/GetExChangeRate?dateTime=${dateTime}`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((res: any = {}) => {
          const rates = res
            .map(item => {
              const { listEnq = {} } = item;
              const {
                currencY_CODE: code,
                denomcasH_BUY_RATE: buyCashRate,
                denomtranS_SELL_RATE: sellTransfer,
                denomtranS_BUY_RATE: buyTransfer
              } = listEnq;
              const buyCash: number = buyCashRate || 0;
              const sellCash: number = 0;
              return { code, buyCash, buyTransfer, sellTransfer, sellCash };
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
