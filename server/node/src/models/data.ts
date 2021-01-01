'use strict';

import MongooseService from '../libs/mongoose-service';

import {
  FinanceForexRate,
  FinanceStockListedCompany,
  FinanceStockHistoryData,
  FinanceStockIndicator
} from './mongodb';

export const dsFinanceForexRate: MongooseService = new MongooseService(FinanceForexRate);
export const dsFinanceStockListedCompany: MongooseService = new MongooseService(
  FinanceStockListedCompany
);
export const dsFinanceStockHistoryData: MongooseService = new MongooseService(
  FinanceStockHistoryData
);
export const dsFinanceStockIndicator: MongooseService = new MongooseService(FinanceStockIndicator);
