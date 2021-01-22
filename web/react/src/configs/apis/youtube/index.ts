import { IYouTubeEndpoints } from '../../interfaces';

import getTrending from './get-trending';
import getVideoCategories from './get-video-categories';

const youtube: IYouTubeEndpoints = { getTrending, getVideoCategories };

export default youtube;
