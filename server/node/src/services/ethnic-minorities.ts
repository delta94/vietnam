'use strict';

import { postgreClient } from '../clients';

export default class EthnicMinoritiesService {
  public async getEthnicMinorities(): Promise<string | Array<any>> {
    const fields: Array<string> = ['name', 'type', 'type_en'];
    const ethnicMinorities = await postgreClient.find('ethnic_minorities', fields);
    return ethnicMinorities;
  }
}
