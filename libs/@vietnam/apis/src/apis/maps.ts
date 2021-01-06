'use strict';

import fetch from 'node-fetch';

import { baseURL, IMapsPostalCode, IMapsProvince, IMapsDistrict, IMapsWard } from '../constants';

export default class Maps {
  private fetch(endpoint: string): Promise<Array<any>> {
    const url = `${baseURL}/maps/${endpoint}`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((list: Array<any> = []) => {
          resolve(list);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  public async getMacroRegions(): Promise<Array<string>> {
    return await this.fetch('macro-regions');
  }

  public async getRegions(): Promise<Array<string>> {
    return await this.fetch('regions');
  }

  public async getPostalCodes(): Promise<Array<IMapsPostalCode>> {
    return await this.fetch('postal-codes');
  }

  public async getProvinces(): Promise<Array<IMapsProvince>> {
    return await this.fetch('provinces');
  }

  public async getDistricts(): Promise<Array<IMapsDistrict>> {
    return await this.fetch('districts');
  }

  public async getWards(): Promise<Array<IMapsWard>> {
    return await this.fetch('wards');
  }
}
