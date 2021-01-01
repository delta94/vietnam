'use strict';

import configs from './configs';

class Maps {
  private provinces: Array<any> = configs.provinces;
  private districts: Array<any> = configs.districts;
  private wards: Array<any> = configs.wards;
  private places: Array<any> = configs.places;

  public getRegions(): Array<string> {
    const self = this;
    return self.uniq(self.provinces.map(province => province.region)).sort();
  }

  public getSubregions(): Array<string> {
    const self = this;
    return self.uniq(self.provinces.map(province => province.subregion)).sort();
  }

  public getProvinces() {
    return this.provinces;
  }

  public getProvincesByRegion(region: string = ''): Array<any> {
    if (!region) return [];
    return this.provinces.filter(province => province.region === region);
  }

  public getProvincesByRegions(): Array<any> {
    const self = this;
    const regions = self.getRegions();
    return regions.map(region => {
      const provinces = self.getProvincesByRegion(region);
      return { region, provinces };
    });
  }

  public getProvincesBySubregion(region: string = ''): Array<any> {
    if (!region) return [];
    return this.provinces.filter(province => province.region === region);
  }

  public getProvincesBySubregions(): Array<any> {
    const self = this;
    const subregions = self.getSubregions();
    return subregions.map(subregion => {
      const provinces = self.getProvincesBySubregion(subregion);
      return { subregion, provinces };
    });
  }

  public getLicensePlates(): any {
    const self = this;
    const { provinces } = self;
    const licensePlatesMap = {};
    for (const province of provinces) {
      const { name, licensePlates = [] } = province;
      for (const licensePlate of licensePlates) {
        licensePlatesMap[licensePlate] = name;
      }
    }
    return licensePlatesMap;
  }

  public getPostalCodes(): Array<any> {
    return this.provinces.map(province => {
      const { name, postalCodes } = province;
      return { name, postalCodes };
    });
  }

  public getProvinceByLicensePlate(licensePlate: number = 0): string {
    if (!licensePlate) return 'Invalid License Plate';
    const province = this.provinces.find(p => p.licensePlates.includes(licensePlate));
    if (!province) return 'Invalid License Plate';
    const { name = '' } = province;
    return name;
  }

  public getDistricts() {
    return this.districts;
  }

  public getWards() {
    return this.wards;
  }

  public getPlaces(type: string = '') {
    if (!type) return this.places;
    return this.places.filter(place => {
      const { mainType = '', subType = '' } = place;
      return type === mainType || type === subType;
    });
  }

  private uniq(collection: Array<any>): Array<any> {
    return collection
      .filter((value: any, index: number, self: Array<any>) => {
        return self.indexOf(value) === index;
      })
      .filter((value: any) => value);
  }
}

const maps: Maps = new Maps();

export default maps;
