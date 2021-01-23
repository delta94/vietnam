'use strict';

import * as _ from 'lodash';

import { redisClient } from '../clients';
import { passportIndex, utils } from '../libs';

export default class VisasService {
  public async getRequirements(): Promise<Array<any>> {
    const key: string = `visa-requirements`;
    const cache: string = await redisClient.get(key);
    if (cache) {
      console.log(`Get Visa Requirements from Cache`);
      const json = utils.parseJSON(cache, []);
      if (!_.isEmpty(json)) {
        return json;
      }
    }
    const requirements: Array<any> = await passportIndex.getVisaRequirements();
    await redisClient.setex(key, JSON.stringify(requirements), 60 * 60);
    return requirements;
  }
}
