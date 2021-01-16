'use strict';

import * as _ from 'lodash';
import { phonesPrefixes } from '../constants';

export default class PhonesService {
  public async getPrefixes(prefix: string = ''): Promise<string | Array<any>> {
    return phonesPrefixes.filter(item => (prefix ? item.prefix === prefix : true));
  }

  public async getProviders(): Promise<Array<any>> {
    return _.uniq(phonesPrefixes.map(prefix => prefix.provider)).map(provider => {
      const prefixes = phonesPrefixes
        .filter(prefix => prefix.provider === provider)
        .map(prefix => prefix.prefix);
      return { provider, prefixes };
    });
  }

  public async getProviderFromPhoneNumber(number: string): Promise<string> {
    const phoneNumber = this.processPhoneNumber(number);
    const prefix = phoneNumber.substring(0, 3);
    if (phoneNumber.length !== 10) return '';
    const { provider = '' } = phonesPrefixes.find(item => item.prefix === prefix) || {};
    return provider;
  }

  private processPhoneNumber(number: string): string {
    number = number ? number.toString() : ''; // convert to string
    number = number.replace(/\D/g, ''); // strip all non-numeric characters from string
    number = number.replace(/ /g, '').trim(); // remove white space
    number = number.indexOf('84') === 0 ? number.replace('84', '0') : number; // replace 84
    number = number.indexOf('00') === 0 ? number.replace('00', '0') : number; // replace 00
    return number;
  }
}
