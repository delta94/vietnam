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
});
