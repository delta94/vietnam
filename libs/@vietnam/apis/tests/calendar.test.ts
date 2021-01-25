'use strict';

import * as assert from 'assert';
import { describe, it } from 'mocha';

import { calendar } from '../src/';

describe('calendar', () => {
  it('convert solar to lunar', async () => {
    const { date, month, year } = await calendar.convertSolarToLunar(8, 8, 2020);
    console.log(date, month, year);
    assert.ok(date === 19 && month === 6 && year === 2020);
  });

  it('convert lunar to solar', async () => {
    const { date, month, year } = await calendar.convertLunarToSolar(19, 6, 2020);
    console.log(date, month, year);
    assert.ok(date === 8 && month === 8 && year === 2020);
  });

  it('get list of can', async () => {
    const listOfCan = await calendar.getListOfCan();
    console.log(listOfCan);
    assert.ok(typeof listOfCan === 'object' && listOfCan.length > 0);
  });

  it('get list of chi', async () => {
    const listOfChi = await calendar.getListOfChi();
    console.log(listOfChi);
    assert.ok(typeof listOfChi === 'object' && listOfChi.length > 0);
  });

  it('get can chi of date', async () => {
    const canChi = await calendar.getCanChi(19, 6, 2020);
    console.log(canChi);
    assert.ok(canChi === 'Quý Mùi');
  });

  it('get can chi of date', async () => {
    const canChi = await calendar.getTietKhi(19, 6, 2020);
    console.log(canChi);
    assert.ok(canChi === 'Quý Mùi');
  });

  it('is solar leap year', async () => {
    const isSolarLeapYear = calendar.isSolarLeapYear(2020);
    assert.ok(isSolarLeapYear);
  });

  it('is lunar leap year', async () => {
    const isLunarLeapYear = calendar.isLunarLeapYear(2020);
    assert.ok(isLunarLeapYear);
  });
});
