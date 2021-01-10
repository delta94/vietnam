'use strict';

import { postgreClient } from '../clients';

export default class TechnologiesService {
  public async getTechnologies(type_id: string): Promise<string | Array<any>> {
    const fields: Array<string> = ['name', 'type', 'type_id', 'url', 'npm'];
    const technologies = await postgreClient.find('technologies', { type_id }, fields);
    return technologies;
  }
}
