'use strict';

import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

export default class Eximbank {
  public async getForexRates() {
    const url: string = 'https://www.eximbank.com.vn/get-exchange-rate';
    const jsonrpc: string = '2.0';
    const method: string = 'call';
    const id: number = Date.now();
    const params = { url: '/tygiangoaitevagiavang' };
    const body = { jsonrpc, method, params, id };
    return new Promise(resolve => {
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
        .then(res => res.json())
        .then((res: any = []) => {
          const { result = {} } = res;
          const { datas = [] } = result;
          const rates = datas
            .map(item => {
              const { Cur_Type: code = '', TTBUYRT, TTSELLRT, CSHBUYRT, CSHSELLRT } = item;
              const buyCash: number = parseFloat(CSHBUYRT.replace(/\./g, '')) || 0;
              const buyTransfer: number = parseFloat(TTBUYRT.replace(/\./g, '')) || 0;
              const sellCash: number = parseFloat(CSHSELLRT.replace(/\./g, '')) || 0;
              const sellTransfer: number = parseFloat(TTSELLRT.replace(/\./g, '')) || 0;
              return { code, buyCash, buyTransfer, sellCash, sellTransfer };
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
