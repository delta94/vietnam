'use strict';

import { banks } from '../../libs';

const main = async () => {
  const ID: string = process.env.ID;
  const rates = await banks[ID].getForexRates();
  console.log(ID, rates);
};

main().catch(error => console.error(error));
