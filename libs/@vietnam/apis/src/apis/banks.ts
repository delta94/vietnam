'use strict';

import Base from './base';

import { IBank } from '../constants';

export default class Banks extends Base {
  public async getBanks(): Promise<Array<IBank>> {
    return await this.get('banks');
  }

  public async getForexBankIds(): Promise<Array<string>> {
    const { banks = [] } = (await this.get('banks/forex/banks')) || {};
    return banks;
  }

  public async getForexRates(id: string = 'vietcombank'): Promise<Array<any>> {
    const rates: Array<any> = (await this.get(`banks/forex/rates/${id}`)) || [];
    return rates;
  }
}
