'use strict';

import { liveScore } from '../../libs';

const main = async () => {
  const res = await liveScore.getVLeague();
  console.log(res);
};

main().catch(error => console.error(error));
