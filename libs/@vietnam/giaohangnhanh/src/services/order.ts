'use strict';

import Base from '../helper/base';
import { apis, IEndpoint, IResponse } from '../helper/constants';

export default class Address extends Base {
  constructor(token: string, test: boolean) {
    super(token, test);
  }

  public async getOrder(): Promise<number> {
    const endpoint: IEndpoint = apis.order.getOrder;
    const response: IResponse = await this.fetch(endpoint);
    const { code = 0, data = {} } = response;
    if (code !== 200) return 0;
    return data;
  }

  public async getOrderByClientCode(): Promise<number> {
    const endpoint: IEndpoint = apis.order.getOrderByClientCode;
    const response: IResponse = await this.fetch(endpoint);
    const { code = 0, data = {} } = response;
    if (code !== 200) return 0;
    return data;
  }

  public async getOrderFee(): Promise<number> {
    const endpoint: IEndpoint = apis.order.getOrderFee;
    const response: IResponse = await this.fetch(endpoint);
    const { code = 0, data = {} } = response;
    if (code !== 200) return 0;
    return data;
  }

  public async createOrder(): Promise<number> {
    const endpoint: IEndpoint = apis.order.createOrder;
    const response: IResponse = await this.fetch(endpoint);
    const { code = 0, data = {} } = response;
    if (code !== 200) return 0;
    return data;
  }

  public async updateOrder(): Promise<number> {
    const endpoint: IEndpoint = apis.order.getOrder;
    const response: IResponse = await this.fetch(endpoint);
    const { code = 0, data = {} } = response;
    if (code !== 200) return 0;
    return data;
  }

  public async updateOrderCOD(): Promise<number> {
    const endpoint: IEndpoint = apis.order.getOrderByClientCode;
    const response: IResponse = await this.fetch(endpoint);
    const { code = 0, data = {} } = response;
    if (code !== 200) return 0;
    return data;
  }

  public async printOrder(): Promise<string> {
    const endpoint: IEndpoint = apis.order.getOrderFee;
    const response: IResponse = await this.fetch(endpoint);
    const { code = 0, data = {} } = response;
    if (code !== 200) return '';
    const { token = '' } = data;
    const url: string = `https://dev-online-gateway.ghn.vn/a5/public-api/printA5?token=${token}`;
    return url;
  }

  public async returnOrder(): Promise<number> {
    const endpoint: IEndpoint = apis.order.returnOrder;
    const response: IResponse = await this.fetch(endpoint);
    const { code = 0, data = {} } = response;
    if (code !== 200) return 0;
    return data;
  }

  public async cancelOrder(): Promise<number> {
    const endpoint: IEndpoint = apis.order.returnOrder;
    const response: IResponse = await this.fetch(endpoint);
    const { code = 0, data = {} } = response;
    if (code !== 200) return 0;
    return data;
  }
}
