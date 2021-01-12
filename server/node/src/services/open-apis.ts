'use strict';

import { postgreClient } from '../clients';

export default class OpenAPIsService {
  public async getTechnologies(type_id: string): Promise<Array<any>> {
    const fields: Array<string> = ['name', 'type', 'type_id', 'url', 'npm'];
    const technologies: any = await postgreClient.find('technologies', { type_id }, fields);
    return technologies;
  }
}
