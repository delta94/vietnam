'use strict';

import configs from './configs';

class Finance {
  private stockBrokerageCompanies: Array<any> = configs.stockBrokerageCompanies;

  public getStockBrokerageCompanies(): Array<any> {
    return this.stockBrokerageCompanies;
  }
}

const finance: Finance = new Finance();

export default finance;
