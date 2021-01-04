'use strict';

import Base from '../helper/base';
import {
  apis,
  IError,
  IEndpoint,
  IResponse,
  IPagination,
  IStore,
  IStoreDeliveryAgainResponse
} from '../helper/constants';

export default class Store extends Base {
  constructor(token: string, test: boolean) {
    super(token, test);
  }

  public async getStores(
    client_phone: string,
    pagination: IPagination
  ): Promise<Array<IStore> | IError> {
    const endpoint: IEndpoint = apis.store.getStores;
    const { offset = 0, limit = 1000 } = pagination;
    const query = { client_phone, offset, limit };
    const response: IResponse = await this.fetch(endpoint, { query });
    const { code = 0, message = '', data = {} } = response;
    if (code !== 200) return { message };
    const { shops = [] } = data;
    return shops;
  }

  public async createStore(
    district_id: number,
    ward_code: string,
    store: IStore
  ): Promise<number | IError> {
    const endpoint: IEndpoint = apis.store.createStore;
    const { name, phone, address } = store;
    const query = { district_id, ward_code, name, phone, address };
    const response: IResponse = await this.fetch(endpoint, { query });
    const { code = 0, message = '', data = {} } = response;
    if (code !== 200) return { message };
    const { shop_id } = data;
    return shop_id;
  }

  public async addStaff(shop_id: number, username: string): Promise<number | IError> {
    const endpoint: IEndpoint = apis.store.addStaff;
    const response: IResponse = await this.fetch(endpoint, { body: { shop_id, username } });
    const { code = 0, message = '', data = {} } = response;
    if (code !== 200) return { message };
    const { client_shop_id = 0 } = data;
    return client_shop_id;
  }

  public async deliverAgain(
    shop_id: number,
    order_codes: Array<string>
  ): Promise<Array<IStoreDeliveryAgainResponse> | IError> {
    const endpoint: IEndpoint = apis.store.deliverAgain;
    const response: IResponse = await this.fetch(endpoint, { body: { shop_id, order_codes } });
    const { code = 0, message = '', data = [] } = response;
    if (code !== 200) return { message };
    return data;
  }
}
