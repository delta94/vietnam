'use strict';

import * as assert from 'assert';
import { describe, it } from 'mocha';

import { banks } from '../src/';

describe('banks', () => {
  it('get banks', async () => {
    const _banks = await banks.getBanks();
    console.log(_banks);
    assert.ok(typeof _banks === 'object');
  });

  it('get forex bank id', async () => {
    const ids: Array<string> = await banks.getForexBankIds();
    console.log(ids);
    assert.ok(typeof ids === 'object');
  });

  it('get forex rates', async () => {
    const bankId: string = 'vietcombank';
    const rates: Array<any> = await banks.getForexRates(bankId);
    console.log(rates);
    assert.ok(typeof rates === 'object');
  });
});
