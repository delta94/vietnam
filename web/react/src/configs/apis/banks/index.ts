import { IBanksEndpoints } from '../../interfaces';

import getBanks from './get-banks';
import getForexBanks from './get-forex-banks';
import getForexRates from './get-forex-rates';
import syncForexRates from './sync-forex-rates';

const banks: IBanksEndpoints = {
  getBanks,
  getForexBanks,
  getForexRates,
  syncForexRates
};

export default banks;
