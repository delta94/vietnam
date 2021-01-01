'use strict';

import * as assert from 'assert';
import { describe, it } from 'mocha';

import maps from '../src/';

describe('maps', () => {
  it('get provinces', async () => {
    const provinces = maps.getProvinces();
    // console.log(provinces);
    assert.ok(typeof provinces === 'object');
  });

  it('get regions', async () => {
    const regions = maps.getRegions();
    console.log(regions);
    assert.ok(typeof regions === 'object');
  });

  it('get subregions', async () => {
    const subregions = maps.getSubregions();
    console.log(subregions);
    assert.ok(typeof subregions === 'object');
  });

  it('get license plates', async () => {
    const licensePlates = maps.getLicensePlates();
    console.log(licensePlates);
    assert.ok(typeof licensePlates === 'object');
  });

  it('get postal codes', async () => {
    const postalCodes = maps.getPostalCodes();
    console.log(postalCodes);
    assert.ok(typeof postalCodes === 'object');
  });

  it('get province by license plate', async () => {
    const province = maps.getProvinceByLicensePlate(29);
    console.log(province);
    assert.ok(typeof province === 'string');
  });

  it('get districts', async () => {
    const districts = maps.getDistricts();
    console.log(districts);
    assert.ok(typeof districts === 'object');
  });

  it('get wards', async () => {
    const wards = maps.getWards();
    console.log(wards);
    assert.ok(typeof wards === 'object');
  });

  it('get places', async () => {
    const places = maps.getPlaces();
    console.log(places);
    const bars = maps.getPlaces('bar');
    console.log(bars);
    const cafes = maps.getPlaces('cafe');
    console.log(cafes);
    const universities = maps.getPlaces('university');
    console.log(universities);
    const hospitals = maps.getPlaces('hospital');
    console.log(hospitals);
    assert.ok(typeof places === 'object');
  });
});
