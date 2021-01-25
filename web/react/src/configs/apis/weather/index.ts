import { IWeatherEndpoints } from '../../interfaces';

import getAirVisualCities from './get-air-visual-cities';
import getAirVisual from './get-air-visual';
import getCurrentWeather from './get-current-weather';

const weather: IWeatherEndpoints = {
  getCurrentWeather,
  getAirVisual,
  getAirVisualCities
};

export default weather;
