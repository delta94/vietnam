'use strict';

import Base from './base';

import { IMapsPostalCode, IMapsProvince, IMapsDistrict, IMapsWard } from '../constants';

export default class Maps extends Base {
  public async getMarcoRegions(): Promise<Array<IMapsProvince>> {
    return await this.get('maps/macro-regions');
  }

  public async getRegions(): Promise<Array<IMapsProvince>> {
    return await this.get('maps/regions');
  }

  public async getPostalCodes(): Promise<Array<IMapsPostalCode>> {
    return await this.get('maps/postal-codes');
  }

  public async getProvinces(): Promise<Array<IMapsProvince>> {
    return await this.get('maps/provinces');
  }

  public async getDistricts(): Promise<Array<IMapsDistrict>> {
    return await this.get('maps/districts');
  }

  public async getWards(): Promise<Array<IMapsWard>> {
    return await this.get('maps/wards');
  }
}
