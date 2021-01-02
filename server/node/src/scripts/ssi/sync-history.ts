'use strict';

import * as dotenv from 'dotenv';
dotenv.config({ path: './src/environments/dev.env' });

import { mongooseClient } from '../../clients';
import { financeService } from '../../services';

const TELEGRAM_CHAT_ID: number = parseInt(process.env.TELEGRAM_CHAT_ID, 10);

const main = async () => {
  await mongooseClient.init();

  let SYMBOL = process.env.SYMBOL || '';
  SYMBOL = SYMBOL.toUpperCase();

  if (SYMBOL) {
    await financeService.syncHistoryBySymbol(SYMBOL, TELEGRAM_CHAT_ID);
  } else {
    await financeService.syncHistoryBySymbols(TELEGRAM_CHAT_ID);
  }

  process.exit(0);
};

main().catch(error => console.error(error));
