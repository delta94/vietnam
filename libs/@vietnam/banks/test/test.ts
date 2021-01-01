'use strict';

import * as assert from 'assert';
import { describe, it } from 'mocha';

import vnb from '../src';

describe('vnb', () => {
  /**
   * Banks
   */
  it('get banks', () => {
    const banks: Array<any> = vnb.getBanks();
    console.log(banks);
    assert.ok(typeof banks === 'object');
  });
  /**
   * Forex
   */
  it('get forex banks', async () => {
    const banks = await vnb.getForexBanks();
    console.log(banks);
    assert.ok(typeof banks === 'object');
  });

  it('get forex rates', async () => {
    const rates = await vnb.getForexRates();
    console.log(JSON.stringify(rates, null, 2));
    assert.ok(typeof rates === 'object');
  });

  it('get forex rates by bank', async () => {
    const rates = await vnb.getForexRatesByBank('acb');
    console.log(rates);
    assert.ok(typeof rates === 'object');
  });
});
