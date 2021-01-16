'use strict';

import { news } from '../../libs';

const main = async () => {
  const ID: string = process.env.ID;
  const articles = await news[ID].getArticles();
  console.log(ID, articles);
};

main().catch(error => console.error(error));
