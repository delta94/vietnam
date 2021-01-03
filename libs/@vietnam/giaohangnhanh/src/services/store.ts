'use strict';

import utils from '../helper/utils';

import { ApiRequestOptions } from '../helper/interfaces';

export default class Store {
  private token: string;
  private base: string;

  constructor(token, base) {
    this.token = token;
    this.base = `${base}/shiip/public-api/v2/shop`;
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
          const { data = [] } = res;
          resolve(data);
        })
        .catch(error => {
          resolve(error);
        });
    });
  }

  public async list(offset: number, limit: number, client_phone: string = ''): Promise<any> {
    return await this.apiRequest('GET', `all`, { queryParams: { offset, limit, client_phone } });
  }

  public async register(options: any): Promise<any> {
    const { district_id, ward_code, name, phone, address } = options;
    const body = { district_id, ward_code, name, phone, address };
    return await this.apiRequest('POST', `register`, { body });
  }

  public async addStaff(shop_id: string, username: string): Promise<any> {
    const body = { shop_id, username };
    return await this.apiRequest('POST', `add-client`, { body, queryParams: { shop_id } });
  }
}
