'use strict';

import * as _ from 'lodash';
import fetch from 'node-fetch';

import { esClient, redisClient, telegramClient, postgreClient } from '../clients';
import { banks, utils } from '../libs';
import { dsFinanceForexRate } from '../data';

const URL_BASE: string = process.env.URL_BASE || '';
const TELEGRAM_CHAT_ID: number = parseInt(process.env.TELEGRAM_CHAT_ID || '0', 10) || 0;

interface ITime {
  year: number;
  month: number;
  date: number;
  hour: number;
  minute: number;
  timestamp: number;
}

export default class BanksService {
  public async getBanks(): Promise<Array<any>> {
    const fields: Array<string> = [
      'code',
      'name',
      'name_en',
      'name_short',
      'url',
      'type',
      'type_en'
    ];
    const banks: any = await postgreClient.find('banks', {}, fields);
    return banks;
  }

  public getForexBanks(): Array<string> {
    return banks.bankIds;
  }

  public async getForexRates(): Promise<any> {
    const self = this;
    const { bankIds = [] } = banks;

    const docs: Array<any> = await self.getForexRatesFromDB(bankIds);
    const currencies = self.getCurrencies(docs);
    const rates = self.processForexRates(currencies, docs);

    return rates;
  }

  private async getForexRatesFromDB(bankIds: Array<string> = []): Promise<Array<any>> {
    const self = this;
    return new Promise(resolve => {
      Promise.all(
        bankIds.map(async (id: string) => {
          return await self.getForexRatesOfBankFromDB(id);
        })
      )
        .then(res => {
          resolve(res);
        })
        .catch((error: Error) => {
          console.error('getForexRatesFromDB error', error);
          resolve([]);
        });
    });
  }

  private async getForexRatesOfBankFromDB(id: string): Promise<any> {
    const key: string = `forex-rates-${id}`;
    const cache: string = await redisClient.get(key);
    if (cache) {
      console.log(`Get Forex Rates ${id} from Cache`);
      const json = utils.parseJSON(cache, {});
      if (!_.isEmpty(json)) {
        return json;
      }
    }
    const doc = await dsFinanceForexRate.findOne({ bank: id }, { sort: { timestamp: -1 } });
    if (utils.isObjectEmpty(doc)) return {};
    await redisClient.setex(key, JSON.stringify(doc), 60 * 60);
    return doc;
  }

  private getCurrencies(docs: Array<any> = []) {
    let currencies = [];
    for (const doc of docs) {
      const { rates = [] } = doc;
      const codes = rates.map(rate => rate.code.toUpperCase());
      currencies = currencies.concat(codes);
    }
    currencies = _.uniq(currencies).sort();
    return currencies;
  }

  private processForexRates(currencies: Array<string>, docs: Array<any>): Array<any> {
    const banks = _.uniq(docs.map(doc => doc.bank)).sort();

    console.log(currencies);

    const rates = currencies.map(currency => {
      const item = banks.map(bank => {
        const bankDoc = docs.find(doc => doc.bank === bank) || {};
        const { year = 0, month = 0, date = 0, hour = 0, minute = 0 } = bankDoc;
        const { rates = [] } = bankDoc;
        const rate = rates.find(rate => rate.code === currency) || {};
        const {
          buyCash: _buyCash = 0,
          sellCash: _sellCash = 0,
          buyTransfer: _buyTransfer = 0,
          sellTransfer: _sellTransfer = 0,
          code = currency
        } = rate;
        const buyCash = utils.numberFormatter(_buyCash);
        const buyTransfer = utils.numberFormatter(_buyTransfer);
        const sellCash = utils.numberFormatter(_sellCash);
        const sellTransfer = utils.numberFormatter(_sellTransfer);
        const time =
          `${year}/${utils.addZero(month)}/${utils.addZero(date)} ` +
          `${utils.addZero(hour)}:${utils.addZero(minute)}`;
        return {
          bank,
          code,
          time,
          buyCash,
          buyTransfer,
          sellCash,
          sellTransfer
        };
      });
      return item;
    });

    return _.flattenDeep(rates);
  }

  public async getForexRatesFromBanks(): Promise<any> {
    return new Promise(resolve => {
      Promise.all([
        banks.acb.getForexRates(),
        banks.agribank.getForexRates(),
        banks.bidv.getForexRates(),
        banks.cbbank.getForexRates(),
        banks.dongabank.getForexRates(),
        banks.eximbank.getForexRates(),
        banks.gpbank.getForexRates(),
        banks.hdbank.getForexRates(),
        banks.kienlongbank.getForexRates(),
        banks.lienvietpostbank.getForexRates(),
        banks.msb.getForexRates(),
        banks.namabank.getForexRates(),
        banks.ocb.getForexRates(),
        banks.oceanbank.getForexRates(),
        banks.sacombank.getForexRates(),
        banks.saigonbank.getForexRates(),
        banks.scb.getForexRates(),
        banks.seabank.getForexRates(),
        banks.shb.getForexRates(),
        banks.techcombank.getForexRates(),
        banks.uob.getForexRates(),
        banks.vib.getForexRates(),
        banks.vietbank.getForexRates(),
        banks.vietcapitalbank.getForexRates(),
        banks.vietcombank.getForexRates(),
        banks.vietinbank.getForexRates(),
        banks.vpbank.getForexRates()
      ]).then(res => {
        const [
          acb,
          agribank,
          bidv,
          cbbank,
          dongabank,
          eximbank,
          gpbank,
          hdbank,
          kienlongbank,
          lienvietpostbank,
          msb,
          namabank,
          ocb,
          oceanbank,
          sacombank,
          saigonbank,
          scb,
          seabank,
          shb,
          techcombank,
          uob,
          vib,
          vietbank,
          vietcapitalbank,
          vietcombank,
          vietinbank,
          vpbank
        ] = res;
        return {
          acb,
          agribank,
          bidv,
          cbbank,
          dongabank,
          eximbank,
          gpbank,
          hdbank,
          kienlongbank,
          lienvietpostbank,
          msb,
          namabank,
          ocb,
          oceanbank,
          sacombank,
          saigonbank,
          scb,
          seabank,
          shb,
          techcombank,
          uob,
          vib,
          vietbank,
          vietcapitalbank,
          vietcombank,
          vietinbank,
          vpbank
        };
      });
    });
  }

  public async getForexRatesByBank(id: string): Promise<any> {
    return await banks.getForexRatesByBank(id);
  }

  public getDefaultTime(): any {
    const d: Date = new Date();
    const dy: number = d.getFullYear();
    const dm: number = d.getMonth() + 1;
    const dd: number = d.getDate();
    const dh: number = d.getHours();
    const dmi: number = d.getMinutes();
    const dt: number = d.getTime();

    return { dy, dm, dd, dh, dmi, dt };
  }

  public async syncForexRatesById(
    id: string,
    options: any = {},
    index: number = 0
  ): Promise<string> {
    try {
      const self = this;
      const { dy = 0, dm = 0, dd = 0, dh = 0, dmi = 0, dt = 0 } = self.getDefaultTime();
      const { year = dy, month = dm, date = dd, hour = dh, minute = dmi, timestamp = dt } = options;
      const rates: any = await self.getForexRatesByBank(id);
      console.log(id, rates);
      if (rates.length === 0) {
        await telegramClient.sendMarkdownMessage(TELEGRAM_CHAT_ID, `${index} - ${id}\nNO DATA`);
        return 'NO DATA';
      }
      const query: any = { year, month, date, hour, minute, bank: id };
      const doc: any = { timestamp, year, month, date, hour, minute, bank: id, rates };
      const key: string = `forex-rates-${id}`;
      await redisClient.setex(key, JSON.stringify(doc), 60 * 60);
      await dsFinanceForexRate.updateOne(query, doc);
      // await this.syncForexRatesToES(id, rates, { year, month, date, hour, minute });
      const message = rates
        .map(rate => {
          const { code, buyCash, buyTransfer, sellCash, sellTransfer } = rate;
          return `${code} - ${buyCash} - ${buyTransfer} - ${sellCash} - ${sellTransfer}`;
        })
        .join('\n');
      await telegramClient.sendMarkdownMessage(TELEGRAM_CHAT_ID, `${index} - ${id}\n${message}`);
      return 'OK';
    } catch (error) {
      console.error('syncForexRatesById() error', error);
      return error.stack;
    }
  }

  private async syncForexRatesToES(bank: string, rates: Array<any>, time: any = {}) {
    const { year, month, date, hour, minute } = time;
    const esIndex = 'finance-forex-rates-v1';
    const dateString = `${year}-${utils.addZero(month)}-${utils.addZero(date)}`;
    const timeString = `${utils.addZero(hour)}:${utils.addZero(minute)}:00Z`;
    const esDate = `${dateString}T${timeString}`;
    const res = await esClient.add(esIndex, { bank, rates, date: esDate });
    console.log('syncForexRatesToES() res', res);
    await esClient.refresh(esIndex);
  }

  public async syncForexRates(time: ITime): Promise<any> {
    const self = this;
    try {
      const { dy = 0, dm = 0, dd = 0, dh = 0, dmi = 0, dt = 0 } = self.getDefaultTime();
      const { year = dy, month = dm, date = dd, hour = dh, minute = dmi, timestamp = dt } = time;
      const options = { year, month, date, hour, minute, timestamp };

      const { bankIds = [] } = banks;

      let index = 0;
      for (const id of bankIds) {
        index++;
        await self.syncForexRatesById(id, options, index);
      }
    } catch (error) {
      console.error('syncForexRates() error', error);
      const message: string = `syncForexRates() error`;
      await telegramClient.sendMarkdownMessage(TELEGRAM_CHAT_ID, message);
      const url: string = `${URL_BASE}/api/banks/forex/sync/retry`;
      const data: any = { time };
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
}
