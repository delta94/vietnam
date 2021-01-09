'use strict';

import { postgreClient } from '../clients';

export default class TechnologiesService {
  public async getTechnologies(type_id: string): Promise<string | Array<any>> {
    const technologies = await postgreClient.find('technologies', { type_id });
    return technologies;
  }
}
