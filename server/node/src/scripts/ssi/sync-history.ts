'use strict';

import * as dotenv from 'dotenv';
dotenv.config({ path: './src/environments/dev.env' });

import { mongooseClient } from '../../clients';
import { financeService } from '../../services';

const main = async () => {
  await mongooseClient.connect();

  let SYMBOL = process.env.SYMBOL || '';
  SYMBOL = SYMBOL.toUpperCase();

  if (SYMBOL) {
    await financeService.syncHistoryBySymbol(SYMBOL);
  } else {
    await financeService.syncHistoryBySymbols();
  }

  process.exit(0);
};

main().catch(error => console.error(error));
