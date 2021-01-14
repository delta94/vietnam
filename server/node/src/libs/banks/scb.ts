'use strict';

import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

export default class SCB {
  public async getForexRates() {
    const tableno: string = await this.getTableNo();
    const url: string = `https://www.scb.com.vn/Handlers/GetForeignExchange.aspx?tableno=${tableno}`;
    console.log('url', url);
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.text())
        .then((body: string) => {
          const $: cheerio.Root = cheerio.load(body);
          const rates = $('table tbody tr')
            .get()
            .map(item => {
              const $item = $(item);
              const code = $item.find('td:nth-child(1) strong').text().trim().slice(0, 3) || '';
              const buyCash =
                parseFloat($item.find('td:nth-child(2)').text().trim().replace(/[&#,]/g, '')) || 0;
              const buyTransfer =
                parseFloat($item.find('td:nth-child(3)').text().trim().replace(/[&#,]/g, '')) || 0;
              const sellTransfer =
                parseFloat($item.find('td:nth-child(4)').text().trim().replace(/[&#,]/g, '')) || 0;
              const sellCash =
                parseFloat($item.find('td:nth-child(5)').text().trim().replace(/[&#,]/g, '')) || 0;
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

  private async getTableNo(): Promise<string> {
    const url: string = 'https://www.scb.com.vn/Handlers/GetForeignExchangeCount.aspx';
    const data: any = (await fetch(url).then(res => res.json())) || {};
    const { tableno = [] } = data;
    const last = tableno[tableno.length - 1] || {};
    const { id = '' } = last;
    return id;
  }
}
