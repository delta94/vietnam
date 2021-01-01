'use strict';

import * as dotenv from 'dotenv';
dotenv.config({ path: './src/environments/dev.env' });

import { mongooseClient } from '../../clients';
import { stockService } from '../../services';

const TELEGRAM_CHAT_ID: number = parseInt(process.env.TELEGRAM_CHAT_ID, 10);

const main = async () => {
  await mongooseClient.init();

  let SYMBOL = process.env.SYMBOL || '';
  SYMBOL = SYMBOL.toUpperCase();

  if (SYMBOL) {
    await stockService.syncHistoryBySymbol(SYMBOL, TELEGRAM_CHAT_ID);
  } else {
    await stockService.syncHistoryBySymbols(TELEGRAM_CHAT_ID);
  }

  process.exit(0);
};

main().catch(error => console.error(error));
