'use strict';

import utils from '../helper/utils';

import { ApiRequestOptions } from '../helper/interfaces';

export default class Address {
  private token: string;
  private base: string;

  constructor(token, base) {
    this.token = token;
    this.base = `${base}/shiip/public-api/master-data`;
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
          resolve(data || []);
        })
        .catch(error => {
          resolve(error);
        });
    });
  }

  public async getProvinces(): Promise<any> {
    return await this.apiRequest('GET', `province`);
  }

  public async getDistricts(province_id: number): Promise<any> {
    return await this.apiRequest('GET', `district`, { queryParams: { province_id } });
  }

  public async getWards(district_id: number): Promise<any> {
    return await this.apiRequest('GET', `ward`, { queryParams: { district_id } });
  }
}
