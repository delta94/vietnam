'use strict';

import { postgreClient } from '../clients';

export default class HistoryService {
  public async getDynasties(): Promise<Array<any>> {
    const fields: Array<string> = [
      'temple_name',
      'birth_name',
      'birth',
      'death',
      'start_year',
      'end_year',
      'dynasty'
    ];
    const dynasties: any = await postgreClient.find('history_dynasties', {}, fields);
    return dynasties;
  }
}
