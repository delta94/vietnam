'use strict';

import { redisClient } from '../clients';
import { cities } from '../constants/air-visual';
import { utils, airVisual, openWeatherMap } from '../libs';

export default class WeatherService {
  public async getCurrentWeather(city: string): Promise<Array<any>> {
    const weather: any = await openWeatherMap.getCurrentWeather(city);
    return weather;
  }

  public getAirVisualCities(): Array<any> {
    return cities;
  }

  public async getAirVisual(query: string) {
    query = query.toLowerCase();
    const key: string = `air-visual-${query.split(' ').join('-')}`;
    const cache: string = await redisClient.get(key);
    if (cache) {
      console.log(`Get Air Visual ${query} from Cache`);
      return utils.parseJSON(cache, {});
    }
    const { city = 'Hanoi', state = 'Hanoi', country = 'Vietnam' } =
      cities.find(item => item.city.toLowerCase() === query) || {};
    const result = airVisual.getAirVisual(city, state, country);
    await redisClient.setex(key, JSON.stringify(result), 60 * 60);
    return result;
  }
}
