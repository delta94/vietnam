'use strict';

import { passportIndex } from '../../libs';

const main = async () => {
  const visas = await passportIndex.getVisaRequirements();
  console.log(visas);
};

main().catch(error => console.error(error));
