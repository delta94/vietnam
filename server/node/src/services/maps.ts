'use strict';

import * as _ from 'lodash';

import { postgreClient } from '../clients';

export default class MapsService {
  public async getMacroRegions(): Promise<string | Array<any>> {
    const provinces: any = await postgreClient.find('maps_provinces');
    const macroRegion = _.uniq(provinces.map(province => province.macro_region)).sort();
    return macroRegion;
  }

  public async getRegions(): Promise<string | Array<any>> {
    const provinces: any = await postgreClient.find('maps_provinces');
    const regions = _.uniq(provinces.map(province => province.region)).sort();
    return regions;
  }

  public async getPostalCodes(): Promise<string | Array<any>> {
    const postalCodes = await postgreClient.find('maps_postal_codes');
    return postalCodes;
  }

  public async getProvinces(): Promise<string | Array<any>> {
    const provinces = await postgreClient.find('maps_provinces');
    return provinces;
  }

  public async getDistricts(): Promise<string | Array<any>> {
    const provinces = await postgreClient.find('maps_districts');
    return provinces;
  }

  public async getWards(): Promise<string | Array<any>> {
    const wards = await postgreClient.find('maps_wards');
    return wards;
  }
}
