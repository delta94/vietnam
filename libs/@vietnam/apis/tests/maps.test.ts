'use strict';

import * as assert from 'assert';
import { describe, it } from 'mocha';

import { maps } from '../src/';

describe('maps', () => {
  it('get regions', async () => {
    const macroRegions = await maps.getMacroRegions();
    console.log(macroRegions);
    assert.ok(typeof macroRegions === 'object');
  });

  it('get regions', async () => {
    const regions = await maps.getRegions();
    console.log(regions);
    assert.ok(typeof regions === 'object');
  });

  it('get postal codes', async () => {
    const postalCodes = await maps.getPostalCodes();
    console.log(postalCodes);
    assert.ok(typeof postalCodes === 'object');
  });

  it('get provinces', async () => {
    const provinces = await maps.getProvinces();
    // console.log(provinces);
    assert.ok(typeof provinces === 'object');
  });

  it('get districts', async () => {
    const districts = await maps.getDistricts();
    console.log(districts);
    assert.ok(typeof districts === 'object');
  });

  it('get wards', async () => {
    const wards = await maps.getWards();
    console.log(wards);
    assert.ok(typeof wards === 'object');
  });
});
