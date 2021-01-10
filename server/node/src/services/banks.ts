'use strict';

import * as _ from 'lodash';
import fetch from 'node-fetch';
import vnb from 'vietnambanks';

import { esClient, telegramClient, postgreClient } from '../clients';
import { utils } from '../libs';
import { dsFinanceForexRate } from '../data';

const URL_BASE: string = process.env.URL_BASE || '';

export default class BanksService {
  public async getBanks(): Promise<Array<any>> {
    const banks: any = await postgreClient.find('banks');
    return banks;
  }

  public getForexBanks(): Array<any> {
    return vnb.getForexBanks();
  }

  public async getForexRatesFromAllVietNamBanks(): Promise<any> {
    const self = this;
    const banks: Array<any> = vnb.getForexBanks();
    const bankNames: Array<string> = banks.map(bank => bank.name);

    const docs = await self.getMongoDocs(bankNames);
    const currencies = self.getCurrencies(docs);
    const data = self.processMongoDocs(docs);

    return { currencies, data };
  }

  private async getMongoDocs(bankNames: Array<string> = []) {
    const docs = [];
    for (const bank of bankNames) {
      const doc = await dsFinanceForexRate.findOne({ bank }, { sort: { timestamp: -1 } });
      if (utils.isObjectEmpty(doc)) continue;
      docs.push(doc);
    }
    return docs;
  }

  private getCurrencies(docs: Array<any> = []) {
    let currencies = [];
    for (const item of docs) {
      const { rates = [] } = item;
      const codes = rates.map(rate => rate.code);
      currencies = currencies.concat(codes);
    }
    currencies = _.uniq(currencies).sort();
    return currencies;
  }

  private processMongoDocs(docs: Array<any>): Array<any> {
    return docs.map(item => {
      const { bank = '', year = 0, month = 0, date = 0, hour = 0, minute = 0, rates = [] } = item;

      const buy = {};
      const sell = {};
      const transfer = {};

      for (const rate of rates) {
        const { buy: _buy, sell: _sell, transfer: _transfer, code } = rate;
        buy[code] = utils.numberFormatter(_buy);
        sell[code] = utils.numberFormatter(_sell);
        transfer[code] = utils.numberFormatter(_transfer);
      }

      const time =
        `${year}/${utils.addZero(month)}/${utils.addZero(date)} ` +
        `${utils.addZero(hour)}:${utils.addZero(minute)}`;

      return { bank, buy, sell, transfer, time };
    });
  }

  public async importForexRatesFromAllVietNamBanks(): Promise<Array<any>> {
    return await vnb.getForexRates();
  }

  public async getForexRatesByBank(id: string): Promise<any> {
    return await vnb.getForexRatesByBank(id);
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

  public async sendForexRatesMessage(
    time: any = {},
    data: Array<any> = [],
    telegramChatId: number = 0
  ): Promise<any> {
    const { year = 0, month = 0, date = 0, hour = 0, minute = 0 } = time;
    const dateString: string = `${year}/${utils.addZero(month)}/${utils.addZero(date)}`;
    const timeString: string = `${utils.addZero(hour)}:${utils.addZero(minute)}`;
    const timeMessage = `${dateString} ${timeString}`;

    const banksMessage = data.map(item => `${item.name} - ${item.status}`).join('\n');
    const message = `${timeMessage}\n${banksMessage}`;
    await telegramClient.sendMarkdownMessage(telegramChatId, message);
  }

  public async syncForexRatesByBankId(id: string, options: any = {}): Promise<any> {
    try {
      const self = this;
      const banks = vnb.getForexBanks();
      const { name: bank = '' } = banks.find(bank => bank.id === id);
      const { dy = 0, dm = 0, dd = 0, dh = 0, dmi = 0, dt = 0 } = self.getDefaultTime();
      const {
        year = dy,
        month = dm,
        date = dd,
        hour = dh,
        minute = dmi,
        timestamp = dt,
        telegramChatId = 0
      } = options;
      const esIndex = 'finance-forex-rates-v1';
      const rates: any = await vnb.getForexRatesByBank(id);
      console.log(id, rates);
      if (!rates.length) return;
      const query: any = { year, month, date, hour, minute, bank };
      const doc: any = { timestamp, year, month, date, hour, minute, bank, rates };
      await dsFinanceForexRate.updateOne(query, doc);
      const dateString = `${year}-${utils.addZero(month)}-${utils.addZero(date)}`;
      const timeString = `${utils.addZero(hour)}:${utils.addZero(minute)}:00Z`;
      const esDate = `${dateString}T${timeString}`;
      // const res = await esClient.add(esIndex, { bank, rates, date: esDate });
      // console.log('Res', res);
      // await esClient.refresh(esIndex);
      const message = rates
        .map(rate => {
          const { code, buy, transfer, sell } = rate;
          return `${code} - ${buy} - ${transfer} - ${sell}`;
        })
        .join('\n');
      await telegramClient.sendMarkdownMessage(telegramChatId, `${id}\n${message}`);
    } catch (error) {
      console.error(error);
    }
  }

  public async syncForexRates(telegramChatId: number, time: any): Promise<any> {
    const self = this;
    try {
      const { dy = 0, dm = 0, dd = 0, dh = 0, dmi = 0, dt = 0 } = self.getDefaultTime();
      const { year = dy, month = dm, date = dd, hour = dh, minute = dmi, timestamp = dt } = time;
      const options = { year, month, date, hour, minute, timestamp, telegramChatId };

      const banks = vnb.getForexBanks();
      for (const bank of banks) {
        const { id } = bank;
        await self.syncForexRatesByBankId(id, options);
      }
    } catch (error) {
      console.error('syncForexRates() error', error);
      const message: string = `syncForexRates() error`;
      await telegramClient.sendMarkdownMessage(telegramChatId, message);
      const url: string = `${URL_BASE}/api/banks/forex/sync/retry`;
      const data: any = { telegramChatId, time };
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
}
