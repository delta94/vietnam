'use strict';

import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import * as request from 'request';

import configs from './configs';
import { IBank } from './interfaces';

class VietNamBanks {
  private forexBanks: Array<IBank> = configs.forexBanks;

  public getForexBanks(): Array<IBank> {
    return this.forexBanks.map(bank => {
      const { id, name, url } = bank;
      return { id, name, url };
    });
  }
  /**
   * Forex
   */
  public async getForexRates(): Promise<Array<any>> {
    const self = this;
    const { forexBanks = [] } = self;
    return new Promise(resolve => {
      Promise.all(
        forexBanks.map(async bank => {
          const { id } = bank;
          return await self.getForexRatesByBank(id);
        })
      )
        .then(data => {
          const res = data.map((rates: Array<any> = [], index) => {
            const bank = forexBanks[index];
            const { id, name, url } = bank;
            const status: string = rates.length ? 'OK' : 'ERROR';
            return { id, name, url, rates, status };
          });
          resolve(res);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  public async getForexRatesByBank(id: string = '') {
    const self = this;
    const { forexBanks = [] } = self;
    if (!forexBanks.length) return [];
    const bank: any = forexBanks.find(bank => bank.id === id) || {};
    if (!Object.keys(bank).length) return [];
    const { forex = {} } = bank;
    if (!Object.keys(forex).length) return [];
    let { url = '', options = {}, processor = () => [] } = forex;
    if (!url) return [];
    url = await self.getForexUrl(url, id);
    const requestOptions = Object.assign({ url, method: 'GET', timeout: 60000 }, options);

    return new Promise(resolve => {
      try {
        request(requestOptions, (error, response, body) => {
          if (error) {
            console.error('getForexRatesByBank() error', error);
            return resolve([]);
          }

          const rates = processor(body, cheerio);

          resolve(rates);
        });
      } catch (error) {
        console.error('getForexRatesByBank() error', error);
        resolve([]);
      }
    });
  }

  private async getForexUrl(url: string, id: string): Promise<string> {
    const self = this;
    const d = new Date();
    if (id === 'scb') {
      const tableno: string = await self.getScbTableNo();
      url = `${url}?tableno=${tableno}`;
    }
    if (id === 'vietbank') {
      const dd = self.addZero(d.getDate());
      const mm = self.addZero(d.getMonth() + 1);
      const yyyy = d.getFullYear();
      const date = `${mm}/${dd}/${yyyy}`;
      const countTime: string = await self.getVietBankCountTime(date);
      url = `${url}?date=${date}&counttime=${countTime}`;
    }
    if (id === 'seabank') {
      const cacheBuster = d.getTime();
      url = `${url}?cacheBuster=${cacheBuster}`;
    }
    if (id === 'ocb') {
      const date = d.getDate();
      const month = d.getMonth() + 1;
      const year = d.getFullYear();
      const time = d.getTime();
      url = `${url}?date=${date}&month=${month}&year=${year}&_=${time}`;
    }
    if (id === 'acb') {
      const dd = self.addZero(d.getDate());
      const mm = self.addZero(d.getMonth() + 1);
      const yyyy = d.getFullYear();
      const date = `${dd}/${mm}/${yyyy}`;
      const lannt = await self.getAcbTime(date);
      url = `${url}?txtngaynt=${date}&lannt=${lannt}`;
    }
    return url;
  }

  private async getScbTableNo(): Promise<string> {
    const url: string = 'https://www.scb.com.vn/Handlers/GetForeignExchangeCount.aspx';
    const data: any = (await fetch(url).then(res => res.json())) || {};
    const { tableno = [] } = data;
    const last = tableno[tableno.length - 1] || {};
    const { id = '' } = last;
    return id;
  }

  private async getVietBankCountTime(date: string): Promise<string> {
    const url: string = `https://www.vietbank.com.vn/api/ApiSupport/getcountupdatecurrencywheredate?date=${date}`;
    const data: string = (await fetch(url).then(res => res.text())) || '0';
    return data;
  }

  private async getAcbTime(date: string): Promise<string> {
    const url: string = `https://acb.com.vn/ACBComponent/jsp/html/vn/exchange/getlan.jsp?txtngaynt=${date}&cmd=EXCHANGE`;
    let data: string = (await fetch(url).then(res => res.text())) || '0';
    const startIndex: number = data.indexOf('>') + 1;
    const endIndex: number = data.indexOf('</option>');
    const time: string = data.slice(startIndex, endIndex);
    return time;
  }

  private addZero(i): string {
    return i > 9 ? i : `0${i}`;
  }
}

const vnb: VietNamBanks = new VietNamBanks();

export default vnb;
