'use strict';

import fetch from 'node-fetch';

import configs from './configs';

class AISEC {
  private base: string = `https://datafeed.aisec.com.vn`;
  private markets: Array<any> = configs.markets;
  private hnx30: Array<any> = configs.hnx30;

  constructor() {}

  private getDataFeed(endpoint: string = ''): Promise<Array<any>> {
    const self = this;
    return new Promise(resolve => {
      const url: string = `${self.base}/${endpoint}`;
      fetch(url)
        .then(res => res.json())
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  public getMarkets(): Array<any> {
    return this.markets;
  }

  public getHNX30(): Array<any> {
    return this.hnx30;
  }

  public async getVN30(): Promise<Array<any>> {
    const self = this;
    return self.getDataFeed('listvn30');
  }

  public async getWorldIndexes(): Promise<Array<any>> {
    const self = this;
    return await self.getDataFeed('getlistbaseworldindex');
  }

  public async getTopNews(): Promise<Array<any>> {
    const self = this;
    const res = await self.getDataFeed('gettopnews/12');
    const articles = res.map(item => {
      const { rf: url = '', tl: title = '', tm: time = '' } = item;
      return { url, title, time };
    });
    return articles;
  }

  public async getListedCompanies(marketId: string = ''): Promise<Array<any>> {
    const self = this;
    const res = await self.getDataFeed('getlistallstock');
    marketId = marketId.trim().toUpperCase();
    const marketIds = self.markets.map(market => market.id.to);
    return res
      .map(item => {
        let {
          stock_code: code = '',
          name_vn: name = '',
          name_en: englishName = '',
          post_to: market = '',
          name_short: shortName = ''
        } = item;
        market = market.toUpperCase();
        return { code, name, market, englishName, shortName };
      })
      .filter(company => {
        const { market = '' } = company;
        return market && marketIds.includes(marketId) ? market === marketId : true;
      });
  }

  public async getBaseCommodities(): Promise<Array<any>> {
    const self = this;
    return await self.getDataFeed('getlistbasecommondity');
  }

  public async getStockData(codes: Array<string> = []): Promise<Array<any>> {
    const self = this;
    if (!codes.length) codes = await self.getVN30();
    const params = codes.join(',');
    return self.getDataFeed(`getliststockdata/${params}`);
  }
}

const aisec: AISEC = new AISEC();

export default aisec;
