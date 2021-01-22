import { INewsEndpoints } from '../../interfaces';

import getTrends from './get-trends';
import getSources from './get-sources';
import getCategories from './get-categories';
import getArticles from './get-articles';

const news: INewsEndpoints = { getTrends, getSources, getCategories, getArticles };

export default news;
