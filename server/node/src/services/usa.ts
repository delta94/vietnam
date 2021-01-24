'use strict';

import * as _ from 'lodash';

import { redisClient } from '../clients';
import { proPublica, utils } from '../libs';

export default class USAService {
  public async getCongressMembers(chamber: any, congress: number = 117): Promise<Array<any>> {
    const key: string = `usa-congress-${congress}-${chamber}`;
    const cache: string = await redisClient.get(key);
    if (cache) {
      console.log(`Get USA Congress ${congress} ${chamber} from Cache`);
      const json = utils.parseJSON(cache, []);
      if (!_.isEmpty(json)) {
        return json;
      }
    }
    const members = await proPublica.congress.getMembers(congress, chamber);
    await redisClient.setex(key, JSON.stringify(members), 60 * 60 * 24);
    return members;
  }
}
