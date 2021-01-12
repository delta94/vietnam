import { baseAPI, baseGraphQL } from './urls';
import { IPeriod, IMonth, IEndpoints } from './interfaces';

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
import weather from './weather';
import youtube from './youtube';

export { baseAPI, baseGraphQL };

export const periods: Array<IPeriod> = [
  { label: '1 Week', value: '1W' },
  { label: '2 Weeks', value: '2W' },
  { label: '3 Weeks', value: '3W' },
  { label: '1 Month', value: '1M' },
  { label: '2 Months', value: '2M' },
  { label: '3 Months', value: '3M' },
  { label: '6 Months', value: '6M' },
  { label: '1 Year', value: '1Y' },
  { label: '2 Years', value: '2Y' },
  { label: '3 Years', value: '3Y' },
  { label: '4 Years', value: '4Y' },
  { label: '5 Years', value: '5Y' }
];

export const months: Array<IMonth> = [
  { name: 'january', short: 'jan' },
  { name: 'february', short: 'feb' },
  { name: 'march', short: 'mar' },
  { name: 'april', short: 'apr' },
  { name: 'may', short: 'may' },
  { name: 'june', short: 'jun' },
  { name: 'july', short: 'jul' },
  { name: 'august', short: 'aug' },
  { name: 'september', short: 'sep' },
  { name: 'october', short: 'oct' },
  { name: 'november', short: 'nov' },
  { name: 'december', short: 'dec' }
];

export type EndpointGroups =
  | 'administrativeDivisions'
  | 'banks'
  | 'calendar'
  | 'ethnicMinorities'
  | 'finance'
  | 'government'
  | 'licensePlates'
  | 'music'
  | 'news'
  | 'phones'
  | 'sports'
  | 'technologies';

export const endpoints: IEndpoints = {
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
  weather,
  youtube
};
