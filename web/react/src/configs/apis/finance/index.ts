import { IFinanceEndpoints } from '../../interfaces';

import calculateProfit from './calculate-profit';
import getStockCompanies from './get-stock-companies';
import getStockHighlights from './get-stock-highlights';
import getStockPotentials from './get-stock-potentials';
import getStockHistory from './get-stock-history';

const finance: IFinanceEndpoints = {
  getStockCompanies,
  getStockHistory,
  getStockHighlights,
  getStockPotentials,
  calculateProfit
};

export default finance;
