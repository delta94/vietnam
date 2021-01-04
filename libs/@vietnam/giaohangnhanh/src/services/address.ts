'use strict';

import Base from '../helper/base';
import {
  apis,
  IError,
  IEndpoint,
  IResponse,
  IProvince,
  IDistrict,
  IWard,
  IStationRequest,
  IStation,
  IPagination
} from '../helper/constants';

export default class Address extends Base {
  constructor(token: string, test: boolean) {
    super(token, test);
  }

  public async getProvinces(): Promise<Array<IProvince> | IError> {
    const endpoint: IEndpoint = apis.address.getProvinces;
    const response: IResponse = await this.fetch(endpoint);
    const { code = 0, message = '', data = [] } = response;
    if (code !== 200) return { message };
    const provinces = data.map(item => {
      const { ProvinceID: province_id, ProvinceName: name, Code: code } = item;
      return { province_id, name, code };
    });
    return provinces;
  }

  public async getDistricts(province_id: number): Promise<Array<IDistrict> | IError> {
    const endpoint: IEndpoint = apis.address.getDistricts;
    const response: IResponse = await this.fetch(endpoint, { query: { province_id } });
    const { code = 0, message = '', data = [] } = response;
    if (code !== 200) return { message };
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

  public async getWards(district_id: number): Promise<Array<IWard> | IError> {
    const endpoint: IEndpoint = apis.address.getWards;
    const response: IResponse = await this.fetch(endpoint, { query: { district_id } });
    const { code = 0, message = '', data = [] } = response;
    if (code !== 200) return { message };
    const wards = data.map(item => {
      const { DistrictID: district_id, WardName: name, WardCode: code } = item;
      return { district_id, name, code };
    });
    return wards;
  }

  public async getStations(options: IStationRequest): Promise<Array<IStation> | IError> {
    const endpoint: IEndpoint = apis.address.getStations;
    const { district_id = 0, ward_code = '', offset = 0, limit = 1000 } = options;
    const query = { district_id, ward_code, offset, limit };
    const response: IResponse = await this.fetch(endpoint, { query });
    const { code = 0, message = '', data = [] } = response;
    if (code !== 200) return { message };
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
