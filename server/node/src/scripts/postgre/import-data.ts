'use strict';

import * as fs from 'fs';
import * as dotenv from 'dotenv';
dotenv.config({ path: '../../environments/dev.env' });

import { postgreClient } from '../../clients';
import { table, schema, rows } from './data';
import { utils } from '../../libs';

const main = async () => {
  await postgreClient.connect();

  const rows = await utils.convertCSVtoJSON('./nam.csv');

  const dropTableResponse = await postgreClient.dropTable(table);
  console.log('dropTableResponse', dropTableResponse);

  const createTableResponse = await postgreClient.createTable(table, schema);
  console.log('createTableResponse', createTableResponse);

  const insertManyResponse: any = await postgreClient.insertMany(table, rows);
  console.log('insertManyResponse', insertManyResponse);

  const allRows = await postgreClient.find(table);
  console.log('rows', allRows);

  process.exit(0);
};

main().catch(error => console.error(error));
