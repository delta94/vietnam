'use strict';

import * as assert from 'assert';
import { describe, it } from 'mocha';

import GHN from '../src';
const token: string = '7a4cd98d-4dc2-11eb-aad2-9ec3d9780e97';
const ghn: GHN = new GHN(token, { test: true });

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

describe('order', () => {
  it('create order', async () => {
    const shop_id: number = 0;
    const info = {
      to_name: '',
      to_phone: '',
      to_address: '',
      to_ward_code: '',
      to_district_id: 0,
      content: '',
      weight: 0,
      length: 0,
      width: 0,
      height: 0,
      payment_type_id: 1,
      required_note: ''
    };
    const order = await ghn.order.createOrder(shop_id, info);
    console.log('order', order);
    assert.ok(typeof order === 'object');
  });

  it('get order', async () => {
    const order_code: string = '';
    const order = await ghn.order.getOrder(order_code);
    console.log('order', order);
    assert.ok(typeof order === 'object');
  });

  it('get order by client_order_code', async () => {
    const client_order_code: string = '';
    const order = await ghn.order.getOrderByClientCode(client_order_code);
    console.log('order', order);
    assert.ok(typeof order === 'object');
  });

  it('get order fee', async () => {
    const order_code: string = '';
    const order = await ghn.order.getOrderFee(order_code);
    console.log('order', order);
    assert.ok(typeof order === 'object');
  });
});

describe('service', () => {
  it('get services', async () => {
    const shop_id: number = 76807;
    const from_district: number = 1492;
    const to_district: number = 1489;
    const services = await ghn.service.getServices(shop_id, from_district, to_district);
    console.log('services', services);
    assert.ok(typeof services === 'object');
  });

  it('calculate fee', async () => {
    const shop_id: number = 76807;
    const service_id: number = 0;
    const to_ward_code: string = '';
    const to_district_id: number = 0;
    const weight: number = 10; // gram
    const length: number = 10; // cm
    const width: number = 10; // cm
    const height: number = 10; // cm
    const feeData = await ghn.service.calculateFee(shop_id, {
      service_id,
      to_ward_code,
      to_district_id,
      weight,
      length,
      width,
      height
    });
    console.log('feeData', feeData);
    assert.ok(typeof feeData === 'object');
  });

  it('calculate expected delivery time', async () => {
    const shop_id: number = 76807;
    const from_district_id: number = 0;
    const from_ward_code: string = '';
    const to_district_id: number = 0;
    const to_ward_code: string = '';
    const service_id: number = 0;
    const timeData = await ghn.service.calculateExpectedDeliveryTime(shop_id, {
      from_district_id,
      from_ward_code,
      to_district_id,
      to_ward_code,
      service_id
    });
    console.log('timeData', timeData);
    assert.ok(typeof timeData === 'object');
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

  it('create store', async () => {
    const district_id: number = 0;
    const ward_code: string = '';
    const info = { name: '', phone: '', address: '' };
    const store = await ghn.store.createStore(district_id, ward_code, info);
    console.log('store', store);
    assert.ok(typeof store === 'object');
  });

  it('add staff', async () => {
    const shop_id: number = 0;
    const phone_number: string = '';
    const staff = await ghn.store.addStaff(shop_id, phone_number);
    console.log('staff', staff);
    assert.ok(typeof staff === 'object');
  });

  it('deliver again', async () => {
    const shop_id: number = 0;
    const order_code: string = '';
    const orders = await ghn.store.deliverAgain(shop_id, order_code);
    console.log('orders', orders);
    assert.ok(typeof orders === 'object');
  });
});

describe('ticket', () => {
  it('get ticket', async () => {
    const ticket_id: number = 0;
    const ticket = await ghn.ticket.getTicket(ticket_id);
    console.log('ticket', ticket);
    assert.ok(typeof ticket === 'object');
  });

  it('create ticket', async () => {
    const ticket_info: any = { category: '', description: '', order_code: '' };
    const ticket = await ghn.ticket.createTicket(ticket_info);
    console.log('ticket', ticket);
    assert.ok(typeof ticket === 'object');
  });

  it('add feedback to ticket', async () => {
    const ticket_id: number = 0;
    const feedback_info = { description: '' };
    const ticket = await ghn.ticket.addFeedbackToTicket(ticket_id, feedback_info);
    console.log('ticket', ticket);
    assert.ok(typeof ticket === 'object');
  });
});
