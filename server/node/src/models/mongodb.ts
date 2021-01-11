'use strict';

import * as mongoose from 'mongoose';

import { mongooseClient } from '../clients';
/**
 * Finance (Forex)
 */
export const FinanceForexRate: mongoose.model = mongooseClient.modelize('FinanceForexRate', {
  timestamp: { type: Number, default: 0, index: true, required: true },
  year: { type: Number, default: 0, index: true, required: true },
  month: { type: Number, default: 0, index: true, required: true },
  date: { type: Number, default: 0, index: true, required: true },
  hour: { type: Number, default: 0, index: true, required: true },
  minute: { type: Number, default: 0, index: true, required: true },
  bank: { type: String, default: '', index: true, required: true },
  rates: { type: [Object], default: [], required: true }
});

export const FinanceStockListedCompany: mongoose.model = mongooseClient.modelize(
  'FinanceStockListedCompany',
  {
    id: { type: String, default: '', required: true, unique: true, index: true },
    symbol: { type: String, default: '', required: true },
    name: { type: String, default: '', required: true },
    market: { type: String, default: '', required: true },
    group: { type: String, default: '', required: true },
    industry: { type: String, default: '' },
    supersector: { type: String, default: '' },
    sector: { type: String, default: '' },
    subsector: { type: String, default: '' },
    listingDate: { type: String, default: '' },
    ceiling: { type: Number, default: 0 },
    floor: { type: Number, default: 0 },
    watching: { type: Boolean, default: false },
    lastSyncedAt: { type: Number, default: 0 }
  }
);

export const FinanceStockHistoryData: mongoose.model = mongooseClient.modelize(
  'FinanceStockHistoryData',
  {
    symbol: { type: String, default: '', required: true },
    timestamp: { type: Number, default: 0, required: true },
    year: { type: Number, default: 0, required: true },
    month: { type: Number, default: 0, required: true },
    date: { type: Number, default: 0, required: true },
    close: { type: Number, default: 0, required: true },
    open: { type: Number, default: 0, required: true },
    high: { type: Number, default: 0, required: true },
    low: { type: Number, default: 0, required: true },
    volume: { type: Number, default: 0, required: true }
  }
);

export const FinanceStockIndicator: mongoose.model = mongooseClient.modelize(
  'FinanceStockIndicator',
  {
    symbol: { type: String, default: '', required: true },
    key: { type: String, default: '', required: true },
    value: { type: Number, default: '', required: true },
    quarter: { type: Number, default: 0, required: true },
    year: { type: Number, default: 0, required: true }
  }
);

export const MapsWard: mongoose.model = mongooseClient.modelize('MapsWard', {
  province: { type: String, default: '', required: true },
  district: { type: String, default: '', required: true },
  ward: { type: String, default: '', required: true }
});

export const User: mongoose.model = mongooseClient.modelize('User', {
  email: { type: String, default: '', required: true, unique: true, index: true },
  password: { type: String, default: '', required: true }
});
