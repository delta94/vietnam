import { ICalendarEndpoints } from '../../interfaces';

import convertLunarToSolar from './convert-lunar-to-solar';
import convertSolarToLunar from './convert-solar-to-lunar';
import getCanChi from './get-can-chi';
import getTietKhi from './get-tiet-khi';

const calendar: ICalendarEndpoints = {
  convertLunarToSolar,
  convertSolarToLunar,
  getCanChi,
  getTietKhi
};

export default calendar;
