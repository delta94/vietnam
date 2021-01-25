import { IOpenAPIsEndpoints } from '../../interfaces';

import getGHNDistricts from './get-ghn-districts';
import getGHNProvinces from './get-ghn-provinces';
import getGHNWards from './get-ghn-wards';
import getOpenAPIs from './get-open-apis';
import getVietceteraArticles from './get-vietcetera-articles';

const openAPIs: IOpenAPIsEndpoints = {
  getGHNDistricts,
  getGHNProvinces,
  getGHNWards,
  getOpenAPIs,
  getVietceteraArticles
};

export default openAPIs;
