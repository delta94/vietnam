'use strict';

import * as dotenv from 'dotenv';
dotenv.config({ path: '../../environments/dev.env' });

import { proPublica } from '../../libs';

const main = async () => {
  const members = await proPublica.congress.getMembers(116, 'house');
  console.log(members);
};

main().catch(error => console.error(error));
