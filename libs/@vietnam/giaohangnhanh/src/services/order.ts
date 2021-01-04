'use strict';

import Base from '../helper/base';
import {
  apis,
  IEndpoint,
  IResponse,
  IOrder,
  IOrderCreateRequest,
  IOrderFee,
  IOrderUpdateRequest,
  IOrderReturnResponse,
  IOrderCancelResponse
} from '../helper/constants';

export default class Address extends Base {
  constructor(token: string, test: boolean) {
    super(token, test);
  }

  public async createOrder(shop_id: number, order: IOrderCreateRequest): Promise<number> {
    const endpoint: IEndpoint = apis.order.createOrder;
    const body = Object.assign({ shop_id }, order);
    const response: IResponse = await this.fetch(endpoint, { body });
    const { code = 0, data = {} } = response;
    if (code !== 200) return 0;
    return data;
  }

  public async getOrder(order_code: string): Promise<IOrder> {
    const endpoint: IEndpoint = apis.order.getOrder;
    const response: IResponse = await this.fetch(endpoint, { query: { order_code } });
    const { code = 0, data = {} } = response;
    if (code !== 200) return {};
    return data;
  }

  public async getOrderByClientCode(client_order_code: string): Promise<IOrder> {
    const endpoint: IEndpoint = apis.order.getOrderByClientCode;
    const response: IResponse = await this.fetch(endpoint, { query: { client_order_code } });
    const { code = 0, data = {} } = response;
    if (code !== 200) return {};
    return data;
  }

  public async getOrderFee(order_code: string): Promise<IOrderFee> {
    const endpoint: IEndpoint = apis.order.getOrderFee;
    const response: IResponse = await this.fetch(endpoint, { query: { order_code } });
    const { code = 0, data = {} } = response;
    if (code !== 200) return {};
    return data;
  }

  public async updateOrder(shop_id: number, order: IOrderUpdateRequest): Promise<string> {
    const endpoint: IEndpoint = apis.order.updateOrder;
    const body = Object.assign({ shop_id }, order);
    const response: IResponse = await this.fetch(endpoint, { body });
    const { code = 0, message = '' } = response;
    if (code !== 200) return message;
    return message;
  }

  public async updateOrderCOD(order_code: string, cod_amount: number): Promise<string> {
    const endpoint: IEndpoint = apis.order.updateOrderCOD;
    const response: IResponse = await this.fetch(endpoint, { body: { order_code, cod_amount } });
    const { code = 0, message = '' } = response;
    if (code !== 200) return message;
    return message;
  }

  public async printOrder(order_code: string): Promise<string> {
    const endpoint: IEndpoint = apis.order.printOrder;
    const response: IResponse = await this.fetch(endpoint, { body: { order_code } });
    const { code = 0, data = {} } = response;
    if (code !== 200) return '';
    const { token = '' } = data;
    const url: string = `https://dev-online-gateway.ghn.vn/a5/public-api/printA5?token=${token}`;
    return url;
  }

  public async returnOrder(order_code: string): Promise<Array<IOrderReturnResponse>> {
    const endpoint: IEndpoint = apis.order.returnOrder;
    const response: IResponse = await this.fetch(endpoint, { body: { order_code } });
    const { code = 0, data = [] } = response;
    if (code !== 200) return [];
    return data;
  }

  public async cancelOrder(order_codes: Array<string>): Promise<Array<IOrderCancelResponse>> {
    const endpoint: IEndpoint = apis.order.cancelOrder;
    const response: IResponse = await this.fetch(endpoint, { body: { order_codes } });
    const { code = 0, data = [] } = response;
    if (code !== 200) return [];
    return data;
  }
}
