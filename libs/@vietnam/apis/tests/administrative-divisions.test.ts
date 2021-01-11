'use strict';

import * as assert from 'assert';
import { describe, it } from 'mocha';

import { administrativeDivisions } from '../src/';

describe('administrative divisions', () => {
  it('get marco regions', async () => {
    const marcoRegions = await administrativeDivisions.getMarcoRegions();
    console.log(marcoRegions);
    assert.ok(typeof marcoRegions === 'object');
  });

  it('get regions', async () => {
    const regions = await administrativeDivisions.getRegions();
    console.log(regions);
    assert.ok(typeof regions === 'object');
  });

  it('get postal codes', async () => {
    const postalCodes = await administrativeDivisions.getPostalCodes();
    console.log(postalCodes);
    assert.ok(typeof postalCodes === 'object');
  });

  it('get provinces', async () => {
    const provinces = await administrativeDivisions.getProvinces();
    console.log(provinces);
    assert.ok(typeof provinces === 'object');
  });

  it('get districts', async () => {
    const districts = await administrativeDivisions.getDistricts();
    console.log(districts);
    assert.ok(typeof districts === 'object');
  });

  it('get wards', async () => {
    const wards = await administrativeDivisions.getWards();
    console.log(wards);
    assert.ok(typeof wards === 'object');
  });
});
