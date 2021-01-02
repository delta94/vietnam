'use strict';

interface IProvider {
  id: string;
  name: string;
  prefixes: Array<string>;
}

export default class Phones {
  private providers: Array<IProvider> = [
    {
      id: 'viettel',
      name: 'Viettel',
      prefixes: ['086', '096', '097', '098', '032', '033', '034', '035', '036', '037', '038', '039']
    },
    {
      id: 'mobifone',
      name: 'Mobifone',
      prefixes: ['089', '090', '093', '070', '076', '077', '078', '079']
    },
    {
      id: 'vinaphone',
      name: 'Vinaphone',
      prefixes: ['081', '082', '083', '084', '085', '088', '091', '094']
    },
    { id: 'vietnamobile', name: 'Vietnamobile', prefixes: ['056', '058', '092'] },
    { id: 'Gmobile', name: 'Gmobile', prefixes: ['059', '099'] }
  ];

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
