'use strict';

import { postgreClient } from '../clients';

export default class SportsService {
  public async getClubs(sport: string): Promise<string | Array<any>> {
    const fields: Array<string> = ['sport', 'sport_en', 'competition', 'city', 'name'];
    const clubs = await postgreClient.find('sports_clubs', fields);
    return clubs;
  }
}
