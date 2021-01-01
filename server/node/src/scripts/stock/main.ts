'use strict';

import * as dotenv from 'dotenv';
dotenv.config({ path: './src/environments/dev.env' });

import * as json2csv from 'json2csv';
const { parse } = json2csv;

import { mongooseClient } from '../../database';
import { tanViet } from '../../libs';
import { dsFinanceStockListedCompany } from '../../models/data';

const main = async () => {
  await mongooseClient.init();

  const companies = await dsFinanceStockListedCompany.find({ group: 'VN30' });

  const rows = [];
  let options = { year: 2020, period: 'quarterly', unit: 1000 };
  for (const company of companies) {
    let { symbol = '', industry } = company;
    industry = industry.toLowerCase() === 'ngân hàng' ? 'bank' : '';
    options = Object.assign(options, { industry });
    const res = await tanViet.getFinancialIndicator('P/E cơ bản', symbol, options);
    const row = { symbol };
    res.forEach(item => {
      let { period, value } = item;
      period = period.replace(' ', '-');
      row[period] = value;
    });
    console.log(symbol, row);
    rows.push(row);
  }

  const fields = Object.keys(rows[0]);
  const csv = parse(rows, { fields });
  console.log(csv);

  process.exit(0);
};

main().catch(error => console.error(error));
