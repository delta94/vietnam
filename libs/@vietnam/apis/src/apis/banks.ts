'use strict';

import Base from './base';

import { IBank } from '../constants';

export default class Banks extends Base {
  public async getBanks(): Promise<Array<IBank>> {
    return await this.get('banks');
  }
}
