'use strict';

import Base from '../helper/base';
import { apis, IEndpoint, IResponse, IPagination, IStore } from '../helper/constants';

export default class Store extends Base {
  constructor(token: string, test: boolean) {
    super(token, test);
  }

  public async getStores(client_phone: string, pagination: IPagination): Promise<Array<IStore>> {
    const endpoint: IEndpoint = apis.store.getStores;
    const { offset = 0, limit = 1000 } = pagination;
    const response: IResponse = await this.fetch(endpoint, {
      query: { client_phone, offset, limit }
    });
    const { code = 0, data = {} } = response;
    if (code !== 200) return [];
    const { shops = [] } = data;
    return shops;
  }

  public async createStore(district_id: number, ward_code: string, store: IStore): Promise<number> {
    const endpoint: IEndpoint = apis.store.createStore;
    const { name, phone, address } = store;
    const response: IResponse = await this.fetch(endpoint, {
      query: { district_id, ward_code, name, phone, address }
    });
    const { code = 0, data = {} } = response;
    if (code !== 200) return 0;
    const { shop_id } = data;
    return shop_id;
  }

  public async addStaff(): Promise<number> {
    const endpoint: IEndpoint = apis.store.addStaff;
    const response: IResponse = await this.fetch(endpoint);
    const { code = 0, data = {} } = response;
    if (code !== 200) return 0;
    return data;
  }

  public async deliveryAgain(): Promise<number> {
    const endpoint: IEndpoint = apis.store.deliveryAgain;
    const response: IResponse = await this.fetch(endpoint);
    const { code = 0, data = {} } = response;
    if (code !== 200) return 0;
    return data;
  }
}
