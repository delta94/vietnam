'use strict';

import Base from './base';

import { IMapsPostalCode, IMapsProvince, IMapsDistrict, IMapsWard } from '../constants';

export default class Maps extends Base {
  public async getPostalCodes(): Promise<Array<IMapsPostalCode>> {
    return await this.fetch('maps/postal-codes');
  }

  public async getProvinces(): Promise<Array<IMapsProvince>> {
    return await this.fetch('maps/provinces');
  }

  public async getDistricts(): Promise<Array<IMapsDistrict>> {
    return await this.fetch('maps/districts');
  }

  public async getWards(): Promise<Array<IMapsWard>> {
    return await this.fetch('maps/wards');
  }
}
