'use strict';

import { IRoute } from '../global/interfaces';

import banks from './banks';
import calendar from './calendar';
import ethnicMinorities from './ethnic-minorities';
import finance from './finance';
import government from './government';
import licensePlates from './license-plates';
import maps from './maps';
import news from './news';
import phones from './phones';
import sports from './sports';
import technologies from './technologies';
import vnltk from './vnltk';

const routes: Array<IRoute> = [].concat(
  banks,
  calendar,
  ethnicMinorities,
  finance,
  government,
  licensePlates,
  maps,
  news,
  phones,
  sports,
  technologies,
  vnltk
);

export default routes;
