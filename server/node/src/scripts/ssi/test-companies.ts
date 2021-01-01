'use strict';

import * as dotenv from 'dotenv';
dotenv.config({ path: './src/environments/dev.env' });

import { ssi } from '../../libs';

const main = async () => {
  const companies = await ssi.getListedCompanies();

  console.log(companies);

  process.exit(0);
};

main().catch(error => console.error(error));
