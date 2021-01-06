'use strict';

import fetch from 'node-fetch';

import Base from './base';

import { baseURL, IPhonesProvider, IPhonesPrefix } from '../constants';

export default class Phones extends Base {
  public async getProviders(): Promise<Array<IPhonesProvider>> {
    const endpoint: string = 'phones/providers';
    return await this.get(endpoint);
  }

  public async getPrefixes(): Promise<Array<IPhonesPrefix>> {
    const endpoint: string = 'phones/prefixes';
    return await this.get(endpoint);
  }

  public async getProviderFromPhoneNumber(number: string = ''): Promise<string> {
    const endpoint: string = 'phones/provider';
    const { provider = '' } = await this.post(endpoint, { number });
    return provider;
  }
}
