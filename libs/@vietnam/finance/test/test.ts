'use strict';

import * as assert from 'assert';
import { describe, it } from 'mocha';

import finance from '../src/';

describe('finance', () => {
  it('get stock brokerage companies', async () => {
    const stockBrokerageCompanies = finance.getStockBrokerageCompanies();
    console.log(stockBrokerageCompanies);
    assert.ok(typeof stockBrokerageCompanies === 'object');
  });
});
