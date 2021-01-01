'use strict';

import * as dotenv from 'dotenv';
dotenv.config({ path: './src/environments/dev.env' });

import { mongooseClient } from '../../clients';
import { stockService } from '../../services';
import { dsFinanceStockIndicator, dsFinanceStockListedCompany } from '../../models/data';

const main = async () => {
  await mongooseClient.init();

  const companies = await dsFinanceStockListedCompany.find({});
  console.log(companies.length);

  const year = 2020;
  const period = 'quarterly';
  const list = await stockService.getPBbyCompanies(companies, { year, period });

  const key = 'PB';

  for (const item of list) {
    const { symbol } = item;
    const keys = Object.keys(item).filter(key => key !== 'symbol');
    for (const period of keys) {
      const [qq, yyyy] = period.split('-');
      const quarter = parseFloat(qq.toLowerCase().replace(/q/, ''));
      const year = parseInt(yyyy, 10);
      const value = item[period];
      console.log({ symbol, key, value, quarter, year });

      await dsFinanceStockIndicator.updateOne(
        { symbol, key, quarter, year },
        { symbol, key, quarter, year, value }
      );
    }
  }

  process.exit(0);
};

main().catch(error => console.error(error));
