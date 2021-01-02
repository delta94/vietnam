'use strict';

import { postgreClient } from '../clients';

export default class GovernmentService {
  public async getMinistries(): Promise<string | Array<any>> {
    const fields: Array<string> = ['short', 'name', 'name_en', 'level', 'level_en'];
    const ministries = await postgreClient.find('government_ministries', fields);
    return ministries;
  }

  public async getMinisters(ministry: string = ''): Promise<string | Array<any>> {
    const officials: any = await postgreClient.find('government_officials');
    return officials.filter(official => official.title_short === ministry);
  }
}
