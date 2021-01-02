'use strict';

type SportEnum = 'basketball' | 'futsal' | 'football';

interface IClub {
  name: string;
  city: string;
  sport: SportEnum;
  competition: string;
}

import fetch from 'node-fetch';

export default class Sports {
  private getClubsBySport(sport: SportEnum): Promise<Array<IClub>> {
    const url = `https://vietnamd.herokuapp.com/api/sports/clubs?sport=${sport}`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((clubs: Array<IClub> = []) => {
          resolve(clubs);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  public async getBasketballClubs(): Promise<Array<IClub>> {
    return await this.getClubsBySport('basketball');
  }

  public getFootballClubs(): Promise<Array<IClub>> {
    return this.getClubsBySport('football');
  }

  public getFutsalClubs(): Promise<Array<IClub>> {
    return this.getClubsBySport('futsal');
  }
}
