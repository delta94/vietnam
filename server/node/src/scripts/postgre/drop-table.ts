'use strict';

import * as dotenv from 'dotenv';
dotenv.config({ path: '../../environments/dev.env' });

import { postgreClient } from '../../clients';

const main = async () => {
  await postgreClient.connect();

  const table: string = 'technologies';
  const dropTableResponse = await postgreClient.dropTable(table);
  console.log('dropTableResponse', dropTableResponse);

  process.exit(0);
};

main().catch(error => console.error(error));
