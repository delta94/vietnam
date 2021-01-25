'use strict';

import Base from './base';

interface IDate {
  year: number;
  month: number;
  date: number;
}

export default class Calendar extends Base {
  private prefix: string = 'calendar';

  public isSolarLeapYear(year: number): boolean {
    return year % 4 == 0 || (year % 100 == 0 && year % 400 == 0);
  }

  public isLunarLeapYear(year: number): boolean {
    const list: Array<number> = [0, 3, 6, 9, 11, 14, 17];
    const leap: number = year % 19;
    return list.includes(leap);
  }

  public async convertSolarToLunar(
    date: number,
    month: number,
    year: number,
    timeZone: number = 7
  ): Promise<IDate> {
    return await this.post(`${this.prefix}/solar2lunar`, { date, month, year, timeZone });
  }

  public async convertLunarToSolar(
    date: number,
    month: number,
    year: number,
    lunarLeap: number = 0,
    timeZone: number = 7
  ): Promise<IDate> {
    return await this.post(`${this.prefix}/lunar2solar`, {
      date,
      month,
      year,
      lunarLeap,
      timeZone
    });
  }

  public async getListOfCan(): Promise<Array<string>> {
    return await this.get(`${this.prefix}/lunar/can`);
  }

  public async getListOfChi(): Promise<Array<string>> {
    return await this.get(`${this.prefix}/lunar/chi`);
  }

  public async getCanChi(date: number, month: number, year: number): Promise<string> {
    const { canChi = '' } = await this.post(`${this.prefix}/lunar/can-chi`, { date, month, year });
    return canChi;
  }

  public async getTietKhi(date: number, month: number, year: number) {
    const { tietKhi } = await this.post(`${this.prefix}/lunar/tiet-khi`, { date, month, year });
    return tietKhi;
  }
}
