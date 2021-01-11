'use strict';

import * as _ from 'lodash';

import { postgreClient } from '../clients';
import { dsMapsWard } from '../data';

export default class administrativeDivisionsService {
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
    const fields: Array<string> = ['code', 'province', 'province_id'];
    const postalCodes: any = await postgreClient.find('maps_postal_codes', { province_id }, fields);
    return postalCodes;
  }

  public async getProvinces(filter: any = {}): Promise<Array<any>> {
    const fields: Array<string> = [
      'province_id',
      'name',
      'capital',
      'level',
      'level_en',
      'macro_region',
      'macro_region_en',
      'region',
      'region_en'
    ];
    const provinces: any = await postgreClient.find('maps_provinces', filter, fields);
    return provinces;
  }

  public async getDistricts(province_id: string): Promise<Array<any>> {
    const fields: Array<string> = ['name', 'level', 'level_en', 'province', 'province_id'];
    const provinces: any = await postgreClient.find('maps_districts', { province_id }, fields);
    return provinces;
  }

  public async getWards(skip: number = 0, limit: number = 100): Promise<Array<any>> {
    const wards: any = await dsMapsWard.find({}, { skip, limit });
    return wards;
  }
}
