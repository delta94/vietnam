'use strict';

import fetch from 'node-fetch';

import { baseURL, ILicensePlate } from '../constants';

export default class LicensePlates {
  public getLicensePlates(): Promise<Array<ILicensePlate>> {
    const url = `${baseURL}/license-plates`;
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
