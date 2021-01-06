'use strict';

import fetch from 'node-fetch';

import { baseURL, EnumSportEN, ISportsClub } from '../constants';

export default class Sports {
  private getClubsBySport(sport: EnumSportEN): Promise<Array<ISportsClub>> {
    const url = `${baseURL}/sports/clubs?sport=${sport}`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((clubs: Array<ISportsClub> = []) => {
          resolve(clubs);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
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
