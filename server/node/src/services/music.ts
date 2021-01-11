'use strict';

import { postgreClient } from '../clients';

export default class MusicService {
  public async getArtists(): Promise<Array<any>> {
    const fields: Array<string> = ['name'];
    const artists: any = await postgreClient.find('music_artists', {}, fields);
    return artists;
  }
}
