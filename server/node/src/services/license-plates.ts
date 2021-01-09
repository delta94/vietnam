'use strict';

import { postgreClient } from '../clients';

export default class LicensePlatesService {
  public async getLicensePlates(license): Promise<string | Array<any>> {
    const fields: Array<string> = ['license', 'definition', 'type'];
    const licensePlates = await postgreClient.find('license_plates', { license }, fields);
    return licensePlates;
  }
}
