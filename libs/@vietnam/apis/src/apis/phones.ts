'use strict';

import Base from './base';

import { baseURL, IPhonesProvider, IPhonesPrefix } from '../constants';

export default class Phones extends Base {
  public async getProviders(): Promise<Array<IPhonesProvider>> {
    const endpoint: string = `phones/providers`;
    return await this.fetch(endpoint);
  }

  public async getPrefixes(): Promise<Array<IPhonesPrefix>> {
    const endpoint: string = `phones/prefixes`;
    return await this.fetch(endpoint);
  }

  public async getProviderFromPhoneNumber(number: string = ''): Promise<string> {
    const url = `${baseURL}/phones/prefixes`;
    return new Promise(resolve => {
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ number })
      })
        .then(res => res.json())
        .then((res = {}) => {
          const { provider = '' } = res;
          resolve(provider);
        })
        .catch(error => {
          console.error(error);
          resolve('');
        });
    });
  }
}
