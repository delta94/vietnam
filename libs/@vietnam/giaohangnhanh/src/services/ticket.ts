'use strict';

import Base from '../helper/base';
import { apis, IEndpoint, IResponse } from '../helper/constants';

export default class Ticket extends Base {
  constructor(token: string, test: boolean) {
    super(token, test);
  }

  public async getTicket(): Promise<number> {
    const endpoint: IEndpoint = apis.ticket.getTicket;
    const response: IResponse = await this.fetch(endpoint);
    const { code = 0, data = {} } = response;
    if (code !== 200) return 0;
    return data;
  }

  public async createTicket(): Promise<number> {
    const endpoint: IEndpoint = apis.ticket.createTicket;
    const response: IResponse = await this.fetch(endpoint);
    const { code = 0, data = {} } = response;
    if (code !== 200) return 0;
    return data;
  }

  public async addFeedback(): Promise<number> {
    const endpoint: IEndpoint = apis.ticket.addFeedback;
    const response: IResponse = await this.fetch(endpoint);
    const { code = 0, data = {} } = response;
    if (code !== 200) return 0;
    return data;
  }
}
