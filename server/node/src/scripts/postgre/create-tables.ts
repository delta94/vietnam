'use strict';

import * as dotenv from 'dotenv';
dotenv.config({ path: '../../environments/dev.env' });

import { postgreClient } from '../../clients';
import { tables } from '../../models/postgre';

const main = async () => {
  await postgreClient.connect();
  const listOfTables: Array<any> = Object.values(tables);
  for (const table of listOfTables) {
    const { name, schema } = table;
    console.log(name, schema);
    // Drop Table
    const dropTableResponse = await postgreClient.dropTable(name);
    console.log(`dropTableResponse ${name}`, dropTableResponse);
    // Create Table
    const createTableResponse = await postgreClient.createTable(name, schema);
    console.log(`createTableResponse ${name}`, createTableResponse);
  }

  // Get Tables
  const _tables: any = await postgreClient.getTables();
  console.log('tables', _tables);

  process.exit(0);
};

main().catch(error => console.error(error));
