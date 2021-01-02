'use strict';

import * as dotenv from 'dotenv';
dotenv.config({ path: '../../environments/dev.env' });

import { postgreClient } from '../../clients';

const main = async () => {
  await postgreClient.connect();

  const dropAllResponse = await postgreClient.dropAll();
  console.log('dropAllResponse', dropAllResponse);

  process.exit(0);
};

main().catch(error => console.error(error));
