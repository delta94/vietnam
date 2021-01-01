'use strict';

import * as assert from 'assert';
import { describe, it } from 'mocha';

import phones from '../src/';

describe('phones', () => {
  it('get providers', async () => {
    const providers = phones.getProviders();
    console.log(providers);
    assert.ok(typeof providers === 'object');
  });

  it('get prefixes', async () => {
    const prefixes = phones.getPrefixes();
    console.log(prefixes);
    assert.ok(typeof prefixes === 'object');
  });

  it('get provider from phone number', async () => {
    const provider: string = phones.getProviderFromPhoneNumber('+84 (0) 908070605');
    console.log('provider', provider);
    assert.ok(provider === 'Mobifone');
  });
});
