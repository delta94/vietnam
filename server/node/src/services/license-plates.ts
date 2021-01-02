'use strict';

import { postgreClient } from '../clients';

export default class LicensePlatesService {
  public async getLicensePlates(): Promise<string | Array<any>> {
    const fields: Array<string> = ['license', 'definition', 'type'];
    const licensePlates = await postgreClient.find('license_plates', fields);
    return licensePlates;
  }
}
