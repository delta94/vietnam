'use strict';

import fetch from 'node-fetch';
import * as schedule from 'node-schedule';

// import { telegramClient } from '../clients';
import { utils } from '../libs';
import { banksService, financeService } from '../services';

const URL_BASE: string = process.env.URL_BASE;
const TELEGRAM_CHAT_ID: number = parseInt(process.env.TELEGRAM_CHAT_ID, 10);

export default async () => {
  schedule.scheduleJob('* * * * *', async () => {
    const {
      year = 0,
      month = 0,
      date = 0,
      day = 0,
      hour = 0,
      minute = 0,
      timestamp = 0
    } = getTime();

    // await telegramClient.sendMessage(TELEGRAM_CHAT_ID, 'text');
    if (hour >= 7 && hour <= 23 && minute % 5 === 0) {
      if (minute % 20 === 0) fetch(URL_BASE);
      if (day >= 1 && day <= 5 && hour >= 8 && hour < 18 && minute === 0) {
        const time = { year, month, date, hour, minute, timestamp };
        await banksService.syncForexRates(TELEGRAM_CHAT_ID, time);
      }
      if (day >= 1 && day <= 5 && hour % 4 === 0 && minute === 0) {
        await financeService.syncHistoryBySymbols(TELEGRAM_CHAT_ID);
      }
    }
  });

  const getTime = (timeZone = 7) => {
    const d: Date = new Date();
    const timeZoneOffset: number = d.getTimezoneOffset() / -60;
    const year: number = d.getFullYear();
    const month: number = d.getMonth() + 1;
    const day: number = d.getDay();
    const date: number = d.getDate();
    const hour: number = (d.getHours() + parseInt(timeZone.toString(), 10) - timeZoneOffset) % 24;
    const minute: number = d.getMinutes();
    const timestamp: number = d.getTime();

    const monthString: string = utils.addZero(month);
    const dateString: string = utils.addZero(date);
    const hourString: string = utils.addZero(hour);
    const minuteString: string = utils.addZero(minute);
    console.log(`${year}-${monthString}-${dateString} ${hourString}:${minuteString}`);

    return { year, month, date, day, hour, minute, timestamp };
  };
};
