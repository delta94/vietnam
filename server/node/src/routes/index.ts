'use strict';

import { IRoute } from '../global/interfaces';

import administrativeDivisions from './administrative-divisions';
import banks from './banks';
import calendar from './calendar';
import ethnicMinorities from './ethnic-minorities';
import finance from './finance';
import government from './government';
import licensePlates from './license-plates';
import music from './music';
import news from './news';
import phones from './phones';
import sports from './sports';
import technologies from './technologies';
import vnltk from './vnltk';

const routes: Array<IRoute> = [].concat(
  administrativeDivisions,
  banks,
  calendar,
  ethnicMinorities,
  finance,
  government,
  licensePlates,
  music,
  news,
  phones,
  sports,
  technologies,
  vnltk
);

export default routes;
