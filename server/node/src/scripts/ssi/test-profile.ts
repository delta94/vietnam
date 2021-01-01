'use strict';

import * as dotenv from 'dotenv';
dotenv.config({ path: './src/environments/dev.env' });

import { ssi } from '../../libs';

const main = async () => {
  const profile = await ssi.getStockProfile('FPT');

  console.log(profile);

  process.exit(0);
};

main().catch(error => console.error(error));
