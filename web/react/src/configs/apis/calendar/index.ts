import { ICalendarEndpoints } from '../../interfaces';

import convertLunarToSolar from './convert-lunar-to-solar';
import convertSolarToLunar from './convert-solar-to-lunar';
import getCanChi from './get-can-chi';

const calendar: ICalendarEndpoints = {
  convertLunarToSolar,
  convertSolarToLunar,
  getCanChi
};

export default calendar;
