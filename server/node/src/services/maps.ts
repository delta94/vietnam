'use strict';

import * as _ from 'lodash';

import { postgreClient } from '../clients';

export default class MapsService {
  public async getMacroRegions(): Promise<Array<string>> {
    const provinces: any = await postgreClient.find('maps_provinces');
    const macroRegion: Array<string> = _.uniq(
      provinces.map(province => province.macro_region)
    ).sort();
    return macroRegion;
  }

  public async getRegions(): Promise<Array<string>> {
    const provinces: any = await postgreClient.find('maps_provinces');
    const regions: Array<string> = _.uniq(provinces.map(province => province.region)).sort();
    return regions;
  }

  public async getPostalCodes(province_id: string): Promise<Array<any>> {
    const postalCodes: any = await postgreClient.find('maps_postal_codes', { province_id });
    return postalCodes;
  }

  public async getProvinces(filter: any = {}): Promise<Array<any>> {
    const provinces: any = await postgreClient.find('maps_provinces', filter);
    return provinces;
  }

  public async getDistricts(province_id: string): Promise<Array<any>> {
    const provinces: any = await postgreClient.find('maps_districts', { province_id });
    return provinces;
  }

  public async getWards(): Promise<Array<any>> {
    const wards: any = await postgreClient.find('maps_wards');
    return wards;
  }
}
