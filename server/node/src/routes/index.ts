'use strict';

import { IRoute } from '../global/interfaces';

import banks from './banks';
import calendar from './calendar';
import government from './government';
import maps from './maps';
import news from './news';
import phones from './phones';
import stock from './stock';
import vnltk from './vnltk';

const routes: Array<IRoute> = [].concat(
  banks,
  calendar,
  government,
  maps,
  news,
  phones,
  stock,
  vnltk
);

export default routes;
