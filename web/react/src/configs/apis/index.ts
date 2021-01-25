import { IEndpoints } from '../interfaces';

import administrativeDivisions from './administrative-divisions';
import banks from './banks';
import calendar from './calendar';
import ethnicMinorities from './ethnic-minorities';
import finance from './finance';
import government from './government';
import history from './history';
import licensePlates from './license-plates';
import music from './music';
import news from './news';
import openAPIs from './open-apis';
import phones from './phones';
import sports from './sports';
import usa from './usa';
import visas from './visas';
import weather from './weather';
import youtube from './youtube';

const endpoints: IEndpoints = {
  administrativeDivisions,
  banks,
  calendar,
  ethnicMinorities,
  finance,
  government,
  history,
  licensePlates,
  music,
  news,
  openAPIs,
  phones,
  sports,
  usa,
  visas,
  weather,
  youtube
};

export default endpoints;
