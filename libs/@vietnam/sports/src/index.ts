'use strict';

import { clubs, IClub, SportEnum } from './clubs';

class Sports {
  private clubs: Array<IClub> = clubs;

  private getClubsBySport(sport: SportEnum): Array<IClub> {
    return this.clubs.filter(club => club.sport === sport);
  }

  public getBasketballClubs(): Array<any> {
    return this.getClubsBySport('basketball');
  }

  public getFootballClubs(): Array<any> {
    return this.getClubsBySport('football');
  }

  public getFutsalClubs(): Array<any> {
    return this.getClubsBySport('futsal');
  }
}

const sports: Sports = new Sports();

export default sports;
