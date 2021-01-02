'use strict';

interface IEthnicMinority {
  name: string;
  type: string;
  type_en: string;
}

import fetch from 'node-fetch';

export default class EthnicMinorities {
  public getEthnicMinorities(): Promise<Array<IEthnicMinority>> {
    const url = `https://vietnamd.herokuapp.com/api/ethnic-minorities`;
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
