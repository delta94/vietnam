'use strict';

import * as dotenv from 'dotenv';
dotenv.config({ path: './src/environments/dev.env' });

import { tanViet } from '../../libs';

const main = async () => {
  const res = await tanViet.getFinancialIndicatores('BID', {
    year: 2020,
    period: 'quarterly',
    unit: 1000
  });

  console.log(JSON.stringify(res, null, 2));
};

main().catch(error => console.error(error));
