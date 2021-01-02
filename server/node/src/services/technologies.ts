'use strict';

import { postgreClient } from '../clients';

export default class TechnologiesService {
  public async getTechnologies(): Promise<string | Array<any>> {
    const technologies = await postgreClient.find('technologies');
    return technologies;
  }
}
