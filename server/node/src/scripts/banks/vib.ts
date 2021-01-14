'use strict';

import { banks } from '../../libs';

const main = async () => {
  const rates = await banks.vib.getForexRates();

  console.log(rates);
};

main().catch(error => console.error(error));
