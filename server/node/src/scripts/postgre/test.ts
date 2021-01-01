'use strict';

import * as dotenv from 'dotenv';
dotenv.config({ path: './src/environments/dev.env' });

import { postgreClient } from '../../clients';
import { MapsProvinceShema } from '../../models/postgre';

const main = async () => {
  await postgreClient.connect();
  const table: string = 'mapsprovinces';
  // Drop Table
  const dropTableResponse = await postgreClient.dropTable(table);
  console.log('dropTableResponse', dropTableResponse);
  // Create Table
  const createTableResponse = await postgreClient.createTable(table, MapsProvinceShema);
  console.log('createTableResponse', createTableResponse);
  // Get Tables
  const tables: any = await postgreClient.getTables();
  console.log('tables', tables);
  // Add Row
  const newRow = {
    name: 'An Giang',
    capital: 'Long Xuyên',
    level: 'tỉnh',
    macro_region: 'nam bộ',
    region: 'đồng bằng sông cửu long'
  };
  const insertResponse: any = await postgreClient.insert(table, newRow);
  console.log('insertResponse', insertResponse);
  // Find
  const rows = await postgreClient.find(table);
  console.log('rows', rows);
  // Update
  const updatedRow = { level: 'thành phố' };
  const updateResponse: any = await postgreClient.update(table, updatedRow);
  console.log('updateResponse', updateResponse);
  // Find 2
  const rows2 = await postgreClient.find(table);
  console.log('rows2', rows2);
  // Update
  const deleteResponse: any = await postgreClient.delete(table);
  console.log('deleteResponse', deleteResponse);
  // Find 3
  const rows3 = await postgreClient.find(table);
  console.log('rows3', rows3);

  process.exit(0);
};

main().catch(error => console.error(error));
