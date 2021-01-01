'use strict';

import BanksService from './banks';
import StockService from './stock';

export const banksService: BanksService = new BanksService();
export const stockService: StockService = new StockService();
