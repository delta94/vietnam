import React, { Component } from 'react';
import { Card, Form, Spinner } from 'react-bootstrap';

import { baseAPI } from '../configs';

class BanksForex extends Component {
  constructor() {
    super();
    this.state = { data: [], currency: '', currencies: [], loading: false, sortBy: '', sortDir: 1 };
    this.getFiannceForexRates = this.getFiannceForexRates.bind(this);
    this.sort = this.sort.bind(this);
  }

  async componentDidMount() {
    await this.getFiannceForexRates();
  }

  getFiannceForexRates() {
    const self = this;
    this.setState({ loading: true });
    const url = `${baseAPI}/banks/forex/rates`;
    fetch(url)
      .then(res => res.json())
      .then((response = {}) => {
        const { data = [], currencies = [] } = response;
        const currency = currencies[0] || '';
        self.setState({ data, currency, currencies, loading: false });
      })
      .catch(error => {
        console.error(error);
        self.setState({ data: [], currency: '', currencies: [], loading: false });
      });
  }

  sort(by) {
    const self = this;
    const { data = [], currency = '', sortDir = 1, sortBy = '' } = this.state;
    const dir = sortDir * (by === sortBy ? -1 : 1);
    this.setState({ sortBy: by, sortDir: dir });
    if (by === 'bank') {
      data.sort((a, b) => dir * (a.bank > b.bank ? 1 : -1));
    } else if (by === 'buy') {
      data.sort((a, b) => {
        const aBuy = a.buy[currency] || 0;
        const bBuy = b.buy[currency] || 0;
        return dir * (aBuy > bBuy ? 1 : -1);
      });
    } else if (by === 'sell') {
      data.sort((a, b) => {
        const aSell = a.sell[currency] || 0;
        const bSell = b.sell[currency] || 0;
        return dir * (aSell > bSell ? 1 : -1);
      });
    } else if (by === 'transfer') {
      data.sort((a, b) => {
        const aTransfer = a.transfer[currency] || 0;
        const bTransfer = b.transfer[currency] || 0;
        return dir * (aTransfer > bTransfer ? 1 : -1);
      });
    }

    self.setState({ data });
  }

  render() {
    const { currency = '', currencies = [], data = [], loading = false } = this.state;
    console.log('currencies', currencies);
    console.log('currency', currency);
    console.log('data', data);
    console.log('loading', loading);
    return (
      <div id="BanksForex">
        <div className="mt-3 w-100">
          <Card>
            <Card.Body>
              {loading && (
                <div className="text-center">
                  <Spinner animation="border" variant="danger"></Spinner>
                </div>
              )}

              {!loading && (
                <Form>
                  <Form.Group>
                    <Form.Control as="select" defaultValue="currency" value={this.state.value}>
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
              )}
              {!loading && (
                <div className="table-responsive table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>
                          <span className="cursor-pointer" onClick={() => this.sort('bank')}>
                            Bank
                          </span>
                        </th>
                        <th>
                          <span className="cursor-pointer" onClick={() => this.sort('buy')}>
                            Buy
                          </span>
                        </th>
                        <th>
                          <span className="cursor-pointer" onClick={() => this.sort('transfer')}>
                            Transfer
                          </span>
                        </th>
                        <th>
                          <span className="cursor-pointer" onClick={() => this.sort('sell')}>
                            Sell
                          </span>
                        </th>
                        <th>Last Updated At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.length
                        ? data.map((item, index) => {
                            const {
                              bank = '',
                              time = '',
                              buy = {},
                              transfer = {},
                              sell = {}
                            } = item;
                            return (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{bank}</td>
                                <td>{buy[currency] || ''}</td>
                                <td>{transfer[currency] || ''}</td>
                                <td>{sell[currency] || ''}</td>
                                <td>{time}</td>
                              </tr>
                            );
                          })
                        : ''}
                    </tbody>
                  </table>
                </div>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default BanksForex;
