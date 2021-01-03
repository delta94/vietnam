'use strict';

import Base from '../helper/base';
import { apis, IEndpoint, IResponse } from '../helper/constants';

export default class Service extends Base {
  constructor(token: string, test: boolean) {
    super(token, test);
  }

  public async getServices(
    shop_id: number,
    from_district: number,
    to_district: number
  ): Promise<Array<any>> {
    const endpoint: IEndpoint = apis.service.getServices;
    const response: IResponse = await this.fetch(endpoint, {
      query: { shop_id, from_district, to_district }
    });
    const { code = 0, data = [] } = response;
    if (code !== 200) return [];
    const services = data.map(item => {
      const { service_id: id, short_name: name, service_type_id: serviceTypeID } = item;
      return { id, name, serviceTypeID };
    });
    return services;
  }

  public async calculateFee(): Promise<number> {
    const endpoint: IEndpoint = apis.service.calculateFee;
    const response: IResponse = await this.fetch(endpoint);
    const { code = 0, data = {} } = response;
    if (code !== 200) return 0;
    return data;
  }

  public async calculateExpectedDeliveryTime(): Promise<number> {
    const endpoint: IEndpoint = apis.service.calculateExpectedDeliveryTime;
    const response: IResponse = await this.fetch(endpoint);
    const { code = 0, data = {} } = response;
    if (code !== 200) return 0;
    return data;
  }
}
