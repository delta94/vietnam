'use strict';

import * as dotenv from 'dotenv';
dotenv.config({ path: '../../environments/dev.env' });

import { mongooseClient } from '../../clients';
import { dsMapsWard } from '../../data';
import { utils } from '../../libs';

const main = async () => {
  await mongooseClient.init();

  await dsMapsWard.delete({});

  const rows = await utils.convertCSVtoJSON('./wards.csv');

  for (const row of rows) {
    const { province, district, ward } = row;
    const res = await dsMapsWard.updateOne(
      { province, district, ward },
      { province, district, ward }
    );
    console.log(res);
  }

  process.exit(0);
};

main().catch(error => console.error(error));
