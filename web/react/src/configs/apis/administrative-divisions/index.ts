import { IAdministrativeDivisionsEndpoints } from '../../interfaces';

import getPostalCodes from './get-postal-codes';
import getProvinces from './get-provinces';
import getDistricts from './get-districts';
import getWards from './get-wards';
import getTotalWards from './get-total-wards';

const administrativeDivisions: IAdministrativeDivisionsEndpoints = {
  getPostalCodes,
  getProvinces,
  getDistricts,
  getWards,
  getTotalWards
};

export default administrativeDivisions;
