'use strict';

import * as dotenv from 'dotenv';
dotenv.config({ path: '../../environments/dev.env' });

import { postgreClient } from '../../clients';
import {
  EthnicMinorityShema,
  GovernmentMinistryShema,
  GovernmentOfficialShema,
  LicensePlateShema,
  MapsProvinceShema,
  MapsDistrictSchema,
  MapsWardSchema,
  SportsClubShema
} from '../../models/postgre';

const main = async () => {
  await postgreClient.connect();
  const listOfTables: Array<any> = [
    { name: 'ethnic_minorities', schema: EthnicMinorityShema },
    { name: 'government_ministries', schema: GovernmentMinistryShema },
    { name: 'government_officials', schema: GovernmentOfficialShema },
    { name: 'license_plates', schema: LicensePlateShema },
    { name: 'maps_provinces', schema: MapsProvinceShema },
    { name: 'maps_districts', schema: MapsDistrictSchema },
    { name: 'maps_wards', schema: MapsWardSchema },
    { name: 'sports_clubs', schema: SportsClubShema }
  ];
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
  const tables: any = await postgreClient.getTables();
  console.log('tables', tables);

  process.exit(0);
};

main().catch(error => console.error(error));
