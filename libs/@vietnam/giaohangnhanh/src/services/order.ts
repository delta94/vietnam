'use strict';

import utils from '../helper/utils';

import { ApiRequestOptions } from '../helper/interfaces';

export default class Address {
  private token: string;
  private base: string;

  constructor(token, base) {
    this.token = token;
    this.base = `${base}/shiip/public-api/v2/shipping-order`;
  }

  private async apiRequest(
    method: string,
    endpoint: string,
    options: ApiRequestOptions = {}
  ): Promise<any> {
    const self = this;
    const { token = '', base = '' } = self;
    const { queryParams = {}, body = {} } = options;
    const queryParamsString = utils.convertObjectToQueryString(queryParams);
    const url = `${base}/${endpoint}?${queryParamsString}`;
    const headers = { Token: token, 'Content-Type': 'application/json' };
    const requestInit: RequestInit = Object.keys(body).length
      ? { method, headers, body: JSON.stringify(body) }
      : { method, headers };
    return new Promise(resolve => {
      fetch(url, requestInit)
        .then(res => res.json())
        .then(res => {
          const { data = {} } = res;
          resolve(data);
        })
        .catch(error => {
          resolve(error);
        });
    });
  }

  public async get(): Promise<any> {}

  public async create(): Promise<any> {}

  public async getAvailableServices(options): Promise<any> {
    const { shop_id, from_district_id, to_district_id } = options;
    const res = await this.apiRequest('POST', `available-services`, {
      body: { shop_id, from_district: from_district_id, to_district: to_district_id }
    });
    const { data = [] } = res;
    return data;
  }

  public async calculateFee(shop, location, item): Promise<any> {
    const { service_id, shop_id } = shop;
    const { from_district_id, to_district_id, to_ward_code } = location;
    const { height, length, weight, width, insurance_value, coupon = '' } = item;
    const queryParams = { shop_id };
    const body = {
      service_id,
      from_district_id,
      to_district_id,
      to_ward_code,
      height,
      length,
      weight,
      width,
      insurance_value,
      coupon
    };
    const res = await this.apiRequest('POST', `fee`, { queryParams, body });
    const { data = [] } = res;
    return data;
  }

  public async calculateExpectedDeliveryTime(shop, from, to): Promise<any> {
    const { service_id, shop_id } = shop;
    const { from_district_id, from_ward_code } = from;
    const { to_district_id, to_ward_code } = to;
    const queryParams = { shop_id };
    const body = { service_id, from_district_id, from_ward_code, to_district_id, to_ward_code };
    const res = await this.apiRequest('POST', `leadtime`, { queryParams, body });
    const { data = [] } = res;
    return data;
  }
}
