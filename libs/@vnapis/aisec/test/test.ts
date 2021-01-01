'use strict';

import * as assert from 'assert';
import { describe, it } from 'mocha';

import aisec from '../src/';

describe('aisec', () => {
  it('get stock markets', async () => {
    const markets = aisec.getMarkets();
    console.log(markets);
    assert.ok(typeof markets === 'object');
  });

  it('get hnx30 codes', async () => {
    const codes = aisec.getHNX30();
    console.log(codes);
    assert.ok(typeof codes === 'object');
  });

  it('get vn30 codes', async () => {
    const codes = await aisec.getVN30();
    console.log(codes);
    assert.ok(typeof codes === 'object');
  });

  it('get top news', async () => {
    const articles = await aisec.getTopNews();
    console.log(articles);
    assert.ok(typeof articles === 'object');
  });

  it('get base commodities', async () => {
    const baseCommodities = await aisec.getBaseCommodities();
    console.log(baseCommodities);
    assert.ok(typeof baseCommodities === 'object');
  });

  it('get world indexes', async () => {
    const indexes = await aisec.getWorldIndexes();
    console.log(indexes);
    assert.ok(typeof indexes === 'object');
  });

  it('get listed companies', async () => {
    const listedCompanies = await aisec.getListedCompanies();
    console.log(listedCompanies);
    assert.ok(typeof listedCompanies === 'object');
  });

  it('get stock data', async () => {
    const data = await aisec.getStockData();
    console.log(data);
    assert.ok(typeof data === 'object');
  });
});
