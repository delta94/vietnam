'use strict';

import { licensePlates } from '../constants';

export default class LicensePlatesService {
  public async getLicensePlates(license: string): Promise<string | Array<any>> {
    return licensePlates.filter(plate =>
      license ? plate.license.toString().toLowerCase().includes(license.toLowerCase()) : true
    );
  }
}
