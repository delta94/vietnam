'use strict';

import * as assert from 'assert';
import { describe, it } from 'mocha';

import GHN from '../src';
const token: string = '7a4cd98d-4dc2-11eb-aad2-9ec3d9780e97';
const ghn: GHN = new GHN(token, true);

describe('address', () => {
  it('get provinces', async () => {
    const provinces = await ghn.address.getProvinces();
    console.log('provinces', provinces);
    assert.ok(typeof provinces === 'object');
  });

  it('get districts', async () => {
    const province_id: number = 201;
    const districts = await ghn.address.getDistricts(province_id);
    console.log('districts', districts);
    assert.ok(typeof districts === 'object');
  });

  it('get districts', async () => {
    const district_id: number = 1542;
    const wards = await ghn.address.getWards(district_id);
    console.log('wards', wards);
    assert.ok(typeof wards === 'object');
  });

  it('get stations', async () => {
    const district_id: number = 1542;
    const ward_code: string = '';
    const pagination = { offset: 0, limit: 1000 };
    const stations = await ghn.address.getStations(district_id, ward_code, pagination);
    console.log('stations', stations);
    assert.ok(typeof stations === 'object');
  });
});

describe('order', () => {});

describe('service', () => {
  it('get services', async () => {
    const shop_id: number = 76807;
    const from_district: number = 1492;
    const to_district: number = 1489;
    const services = await ghn.service.getServices(shop_id, from_district, to_district);
    console.log('services', services);
    assert.ok(typeof services === 'object');
  });
});

describe('store', () => {
  it('get stores', async () => {
    const client_phone = '0937325466';
    const pagination = { offset: 0, limit: 1000 };
    const stores = await ghn.store.getStores(client_phone, pagination);
    console.log('stores', stores);
    assert.ok(typeof stores === 'object');
  });
});

describe('ticket', () => {});
