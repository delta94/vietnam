import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Spinner } from 'react-bootstrap';

import { apis } from '../../../../services';

interface IBanksForexRatesProps {
  themeBorder: string;
  themeTextColor: string;
  themeSpinnerVariant: string;
  themePrimaryBackgroundColor: string;
}

interface IBanksForexRatesState {
  data: Array<any>;
  currency: string;
  currencies: Array<string>;
  loading: boolean;
  sortBy: string;
  sortDir: number;
}

class BanksForexRates extends Component<IBanksForexRatesProps, IBanksForexRatesState> {
  constructor(props: IBanksForexRatesProps) {
    super(props);

    this.state = { data: [], currency: '', currencies: [], loading: false, sortBy: '', sortDir: 1 };

    this.getBanksForexRates = this.getBanksForexRates.bind(this);
    this.sort = this.sort.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.updateCurrency = this.updateCurrency.bind(this);
  }

  async componentDidMount() {
    await this.getBanksForexRates();
  }

  async getBanksForexRates() {
    await this.setState({ loading: true });
    const { data, currency, currencies } = await apis.getBanksForexRates();
    await this.setState({ data, currency, currencies, loading: false });
  }

  async sort(by: string) {
    const { data = [], currency = '', sortDir = 1, sortBy = '' } = this.state;
    const dir = sortDir * (by === sortBy ? -1 : 1);
    await this.setState({ sortBy: by, sortDir: dir });
    if (by === 'bank') {
      data.sort((a, b) => dir * (a.bank > b.bank ? 1 : -1));
    } else if (by === 'buyCash') {
      data.sort((a, b) => {
        const aItem = a.buyCash[currency] || 0;
        const bItem = b.buyCash[currency] || 0;
        return dir * (aItem > bItem ? 1 : -1);
      });
    } else if (by === 'sellCash') {
      data.sort((a, b) => {
        const aItem = a.sellCash[currency] || 0;
        const bItem = b.sellCash[currency] || 0;
        return dir * (aItem > bItem ? 1 : -1);
      });
    } else if (by === 'buyTransfer') {
      data.sort((a, b) => {
        const aItem = a.buyTransfer[currency] || 0;
        const bItem = b.buyTransfer[currency] || 0;
        return dir * (aItem > bItem ? 1 : -1);
      });
    } else if (by === 'sellTransfer') {
      data.sort((a, b) => {
        const aItem = a.sellTransfer[currency] || 0;
        const bItem = b.sellTransfer[currency] || 0;
        return dir * (aItem > bItem ? 1 : -1);
      });
    }

    await this.setState({ data });
  }

  async updateCurrency(event: any) {
    const { value: currency } = event.target;
    await this.setState({ currency });
  }

  renderForm(currencies: Array<any>) {
    return (
      <Form>
        <Form.Group>
          <Form.Control as="select" value={this.state.currency} onChange={this.updateCurrency}>
            <option value={''}>Currency</option>
            {currencies.map((currency, index) => {
              return (
                <option key={index} value={currency}>
                  {currency.toUpperCase()}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }

  renderTable() {
    const { data = [], currency = '', loading } = this.state;
    const {
      themeBorder = '',
      themeTextColor = '',
      themeSpinnerVariant = '',
      themePrimaryBackgroundColor = ''
    } = this.props;

    return (
      <div>
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant={themeSpinnerVariant}></Spinner>
          </div>
        )}
        {!loading && (
          <div className={`table-responsive table-container rounded-lg border ${themeBorder}`}>
            {data.length > 0 && (
              <table className="table">
                <caption className={`${themePrimaryBackgroundColor} text-white text-center`}>
                  Forex Rates {currency && <span>({currency.toUpperCase()})</span>}
                </caption>
                <thead>
                  <tr>
                    <th className={themeTextColor}>#</th>
                    <th className={themeTextColor}>
                      <span className="cursor-pointer" onClick={() => this.sort('bank')}>
                        Bank
                      </span>
                    </th>
                    <th className={themeTextColor}>
                      <span className="cursor-pointer" onClick={() => this.sort('buyCash')}>
                        Buy (Cash)
                      </span>
                    </th>
                    <th className={themeTextColor}>
                      <span className="cursor-pointer" onClick={() => this.sort('buyTransfer')}>
                        Buy (Transfer)
                      </span>
                    </th>
                    <th className={themeTextColor}>
                      <span className="cursor-pointer" onClick={() => this.sort('sellCash')}>
                        Sell (Cash)
                      </span>
                    </th>
                    <th className={themeTextColor}>
                      <span className="cursor-pointer" onClick={() => this.sort('sellTransfer')}>
                        Sell (Transfer)
                      </span>
                    </th>
                    <th className={themeTextColor}>Last Updated At</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    const {
                      bank = '',
                      time = '',
                      buyCash = {},
                      buyTransfer = {},
                      sellCash = {},
                      sellTransfer = {}
                    } = item;
                    const buyCashText: string = buyCash[currency] || '';
                    const buyTransferText: string = buyTransfer[currency] || '';
                    const sellCashText: string = sellCash[currency] || '';
                    const sellTransferText: string = sellTransfer[currency] || '';

                    return (
                      <tr key={index}>
                        <td className={themeTextColor}>{index + 1}</td>
                        <td className={themeTextColor}>{bank}</td>
                        <td className={themeTextColor}>{buyCashText}</td>
                        <td className={themeTextColor}>{buyTransferText}</td>
                        <td className={themeTextColor}>{sellCashText}</td>
                        <td className={themeTextColor}>{sellTransferText}</td>
                        <td className={themeTextColor}>{time}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    );
  }

  render() {
    const { currencies = [], loading = false } = this.state;

    return (
      <div id="BanksForexRates" className="container-fluid">
        {!loading && this.renderForm(currencies)}
        <div className="h-70vh overflow-auto">{this.renderTable()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const themeBorder = _.get(state, 'theme.border', '');
  const themeTextColor = _.get(state, 'theme.textColor', '');
  const themeSpinnerVariant = _.get(state, 'theme.spinnerVariant', '');
  const themePrimaryBackgroundColor = _.get(state, 'theme.primaryBackgroundColor', '');
  return { themeBorder, themeTextColor, themeSpinnerVariant, themePrimaryBackgroundColor };
};

export default connect(mapStateToProps)(BanksForexRates);
