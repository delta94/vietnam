'use strict';

interface ILicensePlate {
  license: string;
  definition: string;
  type: string;
}

import fetch from 'node-fetch';

export default class LicensePlates {
  public getLicensePlates(): Promise<Array<ILicensePlate>> {
    const url = `https://vietnamd.herokuapp.com/api/license-plates`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((licensePlates: Array<ILicensePlate> = []) => {
          resolve(licensePlates);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }
}
