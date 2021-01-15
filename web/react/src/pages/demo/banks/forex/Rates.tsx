import React, { Component } from 'react';
import { Card, Form, Spinner } from 'react-bootstrap';

import { apis } from '../../../../services';

interface IBanksForexProps {}

interface IBanksForexState {
  data: Array<any>;
  currency: string;
  currencies: Array<string>;
  loading: boolean;
  sortBy: string;
  sortDir: number;
}

export default class BanksForex extends Component<IBanksForexProps, IBanksForexState> {
  constructor(props: IBanksForexProps) {
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

  renderTable(data: Array<any> = [], currency: string = '') {
    return (
      <div className="table-responsive table-container">
        {data.length > 0 && (
          <table className="table">
            <caption className="bg-danger text-center text-white">Banks ({data.length})</caption>
            <thead>
              <tr>
                <th>#</th>
                <th>
                  <span className="cursor-pointer" onClick={() => this.sort('bank')}>
                    Bank
                  </span>
                </th>
                <th>
                  <span className="cursor-pointer" onClick={() => this.sort('buyCash')}>
                    Buy (Cash)
                  </span>
                </th>
                <th>
                  <span className="cursor-pointer" onClick={() => this.sort('buyTransfer')}>
                    Buy (Transfer)
                  </span>
                </th>
                <th>
                  <span className="cursor-pointer" onClick={() => this.sort('sellCash')}>
                    Sell (Cash)
                  </span>
                </th>
                <th>
                  <span className="cursor-pointer" onClick={() => this.sort('sellTransfer')}>
                    Sell (Transfer)
                  </span>
                </th>
                <th>Last Updated At</th>
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
                const displayFlag: boolean =
                  buyCashText !== '' ||
                  buyTransferText !== '' ||
                  sellCashText !== '' ||
                  sellTransferText !== '';
                return displayFlag ? (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{bank}</td>
                    <td>{buyCashText}</td>
                    <td>{buyTransferText}</td>
                    <td>{sellCashText}</td>
                    <td>{sellTransferText}</td>
                    <td>{time}</td>
                  </tr>
                ) : (
                  ''
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  }

  render() {
    const { currency = '', currencies = [], data = [], loading = false } = this.state;

    return (
      <div id="BanksForex" className="container">
        <Card className="shadow mt-3 mb-5">
          <Card.Body>
            {loading && (
              <div className="text-center">
                <Spinner animation="border" variant="danger"></Spinner>
              </div>
            )}
            {!loading && this.renderForm(currencies)}
            {!loading && this.renderTable(data, currency)}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
