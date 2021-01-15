'use strict';

import * as dotenv from 'dotenv';
dotenv.config({ path: '../../environments/dev.env' });

import { mongooseClient } from '../../clients';
import { dsFinanceForexRate } from '../../data';
import { banks } from '../../libs';

const main = async () => {
  await mongooseClient.connect();
  const ID: string = process.env.ID;
  const rates = await banks[ID].getForexRates();
  console.log(ID, rates);

  const d = new Date();
  const year: number = d.getFullYear();
  const month: number = d.getMonth() + 1;
  const date: number = d.getDate();
  const hour: number = d.getHours();
  const minute: number = d.getMinutes();
  const timestamp: number = d.getTime();

  const query: any = { year, month, date, hour, minute, bank: ID };
  const doc: any = { timestamp, year, month, date, hour, minute, bank: ID, rates };
  await dsFinanceForexRate.updateOne(query, doc);

  process.exit(0);
};

main().catch(error => console.error(error));
