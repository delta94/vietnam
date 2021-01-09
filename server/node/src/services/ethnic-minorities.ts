'use strict';

import { postgreClient } from '../clients';

export default class EthnicMinoritiesService {
  public async getEthnicMinorities(type_en: string = ''): Promise<Array<any>> {
    const fields: Array<string> = ['name', 'type', 'type_en'];
    const ethnicMinorities: any = await postgreClient.find(
      'ethnic_minorities',
      { type_en },
      fields
    );
    return ethnicMinorities;
  }
}
