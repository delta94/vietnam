'use strict';

import * as _ from 'lodash';
import { postgreClient } from '../clients';

export default class PhonesService {
  public async getPrefixes(): Promise<string | Array<any>> {
    const prefixes = await postgreClient.find('phones_prefixes');
    return prefixes;
  }

  public async getProviders(): Promise<Array<any>> {
    const _prefixes: any = await postgreClient.find('phones_prefixes');
    const providers: Array<any> = _.uniq(_prefixes.map(prefix => prefix.provider)).map(provider => {
      const prefixes = _prefixes
        .filter(_prefix => _prefix.provider === provider)
        .map(_prefix => _prefix.prefix);
      return { provider, prefixes };
    });
    return providers;
  }

  public async getProviderFromPhoneNumber(number: string): Promise<string> {
    const prefixes: any = await postgreClient.find('phones_prefixes');
    const phoneNumber = this.processPhoneNumber(number);
    const _prefix = phoneNumber.substring(0, 3);
    if (phoneNumber.length !== 10) return '';
    const { provider = '' } = prefixes.find(prefix => prefix.prefix === _prefix) || {};
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
