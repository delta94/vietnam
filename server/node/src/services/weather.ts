'use strict';

import { openWeatherMap } from '../libs';

export default class WeatherService {
  public async getCurrentWeather(city: string): Promise<Array<any>> {
    const weather: any = await openWeatherMap.getCurrentWeather(city);
    return weather;
  }
}
