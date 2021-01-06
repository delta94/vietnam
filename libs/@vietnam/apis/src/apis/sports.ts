'use strict';

import Base from './base';

import { EnumSportEN, ISportsClub } from '../constants';

export default class Sports extends Base {
  private async getClubsBySport(sport: EnumSportEN): Promise<Array<ISportsClub>> {
    const endpoint: string = `sports/clubs?sport=${sport}`;
    return await this.fetch(endpoint);
  }

  public async getBasketballClubs(): Promise<Array<ISportsClub>> {
    return await this.getClubsBySport('basketball');
  }

  public getFootballClubs(): Promise<Array<ISportsClub>> {
    return this.getClubsBySport('football');
  }

  public getFutsalClubs(): Promise<Array<ISportsClub>> {
    return this.getClubsBySport('futsal');
  }
}
