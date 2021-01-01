'use strict';

import utils from '../helper/utils';

import { ApiRequestOptions } from '../helper/interfaces';

export default class Ticket {
  private token: string;
  private base: string;

  constructor(token, base) {
    this.token = token;
    this.base = `${base}/shiip/public-api/ticket`;
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

  public async getTicket(ticket_id: number): Promise<any> {
    return await this.apiRequest('GET', `detail`, { queryParams: { ticket_id } });
  }

  public async createTicket(options: any): Promise<any> {
    const { c_email, order_code, category, description } = options;
    const body = { c_email, order_code, category, description };
    return await this.apiRequest('POST', `create`, { body });
  }

  public async replyTicket(options: any): Promise<any> {
    const { ticket_id, description } = options;
    return await this.apiRequest('POST', `reply`, { body: { ticket_id, description } });
  }
}
