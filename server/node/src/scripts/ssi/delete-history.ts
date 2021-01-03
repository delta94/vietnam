'use strict';

import * as dotenv from 'dotenv';
dotenv.config({ path: './src/environments/dev.env' });

import { mongooseClient } from '../../database';
import { dsFinanceStockHistoryData } from '../../models/data';

const main = async () => {
  await mongooseClient.init();

  let SYMBOL = process.env.SYMBOL || '';
  const symbol = SYMBOL.toUpperCase();

  const res = await dsFinanceStockHistoryData.delete({ symbol });
  console.log(res);

  process.exit(0);
};

main().catch(error => console.error(error));