'use strict';

import { providers, IProvider } from './providers';

class Phones {
  private providers: Array<IProvider> = providers;

  public getProviders(): Array<IProvider> {
    return this.providers;
  }

  public getPrefixes(): Array<string> {
    const self = this;
    const { providers = [] } = self;
    let allPrefixes = [];
    for (const provider of providers) {
      const { prefixes = [] } = provider;
      allPrefixes = allPrefixes.concat(prefixes);
    }
    allPrefixes.sort();
    return allPrefixes;
  }

  public getProviderFromPhoneNumber(number: string = ''): string {
    const self = this;
    const { providers = [] } = self;
    number = number ? number.toString() : ''; // convert to string
    number = number.replace(/\D/g, ''); // strip all non-numeric characters from string
    number = number.replace(/ /g, '').trim(); // remove white space
    number = number.indexOf('84') === 0 ? number.replace('84', '0') : number; // replace 84
    number = number.indexOf('00') === 0 ? number.replace('00', '0') : number; // replace 00
    if (number.length !== 10) return '';
    const prefix = number.substring(0, 3);
    let provider: string = '';
    for (const p of providers) {
      const { name = '', prefixes = [] } = p;
      if (prefixes.includes(prefix)) provider = name;
    }
    return provider;
  }
}

const phones: Phones = new Phones();

export default phones;
