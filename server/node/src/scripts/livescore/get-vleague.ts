'use strict';

import { livescore } from '../../libs';

const main = async () => {
  const res = await livescore.getVLeague();
  console.log(res);
};

main().catch(error => console.error(error));
