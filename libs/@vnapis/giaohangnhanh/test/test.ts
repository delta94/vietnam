'use strict';

import * as assert from 'assert';
import { describe, it } from 'mocha';

import GHN from '../src';

describe('GHN', () => {
  it('set up giao hang nhanh', async () => {
    const ghn = new GHN('apiKey');
    console.log(ghn);
    assert.ok(typeof ghn === 'object');
  });
});
