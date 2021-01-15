'use strict';

import * as dotenv from 'dotenv';
dotenv.config({ path: './src/environments/dev.env' });

import { mongooseClient } from '../../clients';
import { dsFinanceStockListedCompany } from '../../data';
import { financeService } from '../../services';

const TELEGRAM_CHAT_ID: number = parseInt(process.env.TELEGRAM_CHAT_ID, 10);

const main = async () => {
  await mongooseClient.connect();

  let GROUP = process.env.GROUP || '';
  GROUP = GROUP.toUpperCase();

  console.log(GROUP);

  const companies = await dsFinanceStockListedCompany.find(
    { group: GROUP },
    { sort: { symbol: 1 } }
  );

  for (const company of companies) {
    const { symbol } = company;
    console.log(symbol);
    await financeService.syncHistoryBySymbol(symbol);
  }

  process.exit(0);
};

main().catch(error => console.error(error));
