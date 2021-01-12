'use strict';

import { IRoute } from '../global/interfaces';

import administrativeDivisions from './administrative-divisions';
import banks from './banks';
import calendar from './calendar';
import dictionary from './dictionary';
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
import vnltk from './vnltk';
import weather from './weather';
import youtube from './youtube';

const routes: Array<IRoute> = [].concat(
  administrativeDivisions,
  banks,
  calendar,
  dictionary,
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
  vnltk,
  weather,
  youtube
);

export default routes;
