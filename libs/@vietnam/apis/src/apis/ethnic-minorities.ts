'use strict';

import fetch from 'node-fetch';

import { baseURL, IEthnicMinority } from '../constants';

export default class EthnicMinorities {
  public getEthnicMinorities(): Promise<Array<IEthnicMinority>> {
    const url = `${baseURL}/ethnic-minorities`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((ethnicMinorities: Array<IEthnicMinority> = []) => {
          resolve(ethnicMinorities);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }
}
