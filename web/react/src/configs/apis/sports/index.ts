import { ISportsEndpoints } from '../../interfaces';

import getSportsClubs from './get-sports-clubs';
import getVLeague from './get-vleague';

const sports: ISportsEndpoints = {
  getSportsClubs,
  getVLeague
};

export default sports;
