'use strict';

import fetch from 'node-fetch';

export default class Maps {
  private fetch(endpoint): Promise<Array<any>> {
    const url = `https://vietnamd.herokuapp.com/api/maps/${endpoint}`;
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

  public async getMacroRegions(): Promise<Array<any>> {
    return await this.fetch('macro-regions');
  }

  public async getRegions(): Promise<Array<any>> {
    return await this.fetch('regions');
  }

  public async getPostalCodes(): Promise<Array<any>> {
    return await this.fetch('postal-codes');
  }

  public async getProvinces(): Promise<Array<any>> {
    return await this.fetch('provinces');
  }

  public async getDistricts(): Promise<Array<any>> {
    return await this.fetch('districts');
  }

  public async getWards(): Promise<Array<any>> {
    return await this.fetch('wards');
  }
}
