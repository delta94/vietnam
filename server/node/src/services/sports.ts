'use strict';

import { postgreClient } from '../clients';

export default class SportsService {
  public async getClubs(sport_en: string): Promise<Array<any>> {
    const fields: Array<string> = ['sport', 'sport_en', 'competition', 'city', 'name'];
    const clubs: any = await postgreClient.find('sports_clubs', { sport_en }, fields);
    return clubs;
  }
}
