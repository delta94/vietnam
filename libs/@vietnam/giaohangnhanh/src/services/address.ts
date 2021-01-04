'use strict';

import Base from '../helper/base';
import {
  apis,
  IEndpoint,
  IResponse,
  IProvince,
  IDistrict,
  IWard,
  IStation,
  IPagination
} from '../helper/constants';

export default class Address extends Base {
  constructor(token: string, test: boolean) {
    super(token, test);
  }

  public async getProvinces(): Promise<Array<IProvince>> {
    const endpoint: IEndpoint = apis.address.getProvinces;
    const response: IResponse = await this.fetch(endpoint);
    const { code = 0, data = [] } = response;
    if (code !== 200) return [];
    const provinces = data.map(item => {
      const { ProvinceID: province_id, ProvinceName: name, Code: code } = item;
      return { province_id, name, code };
    });
    return provinces;
  }

  public async getDistricts(province_id: number): Promise<Array<IDistrict>> {
    const endpoint: IEndpoint = apis.address.getDistricts;
    const response: IResponse = await this.fetch(endpoint, { query: { province_id } });
    const { code = 0, data = [] } = response;
    if (code !== 200) return [];
    const districts = data.map(item => {
      const {
        DistrictID: district_id,
        ProvinceID: province_id,
        DistrictName: name,
        Code: code,
        Type: type,
        SupportType: support_type
      } = item;
      return { district_id, province_id, name, code, type, support_type };
    });
    return districts;
  }

  public async getWards(district_id: number): Promise<Array<IWard>> {
    const endpoint: IEndpoint = apis.address.getWards;
    const response: IResponse = await this.fetch(endpoint, { query: { district_id } });
    const { code = 0, data = [] } = response;
    if (code !== 200) return [];
    const wards = data.map(item => {
      const { DistrictID: district_id, WardName: name, WardCode: code } = item;
      return { district_id, name, code };
    });
    return wards;
  }

  public async getStations(
    district_id: number,
    ward_code: string,
    pagination: IPagination
  ): Promise<Array<IStation>> {
    const endpoint: IEndpoint = apis.address.getStations;
    const { offset = 0, limit = 1000 } = pagination;
    const response: IResponse = await this.fetch(endpoint, {
      query: { district_id, ward_code, offset, limit }
    });
    const { code = 0, data = [] } = response;
    if (code !== 200) return [];
    const stations = data.map(item => {
      const {
        address,
        locationCode: code,
        locationId: id,
        locationName: name,
        parentLocation: parent,
        email,
        latitude,
        longitude
      } = item;
      return { address, code, id, name, parent, email, latitude, longitude };
    });
    return stations;
  }
}
