import React, { Component } from 'react';
import { Card, Form, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

export default class BanksForex extends Component {
  constructor() {
    super();
    this.state = { data: [], currency: '', currencies: [], loading: false, sortBy: '', sortDir: 1 };
    this.getBanksForexRates = this.getBanksForexRates.bind(this);
    this.sort = this.sort.bind(this);
  }

  async componentDidMount() {
    await this.getBanksForexRates();
  }

  async getBanksForexRates() {
    await this.setState({ loading: true });
    const { data, currency, currencies } = await apis.getBanksForexRates();
    await this.setState({ data, currency, currencies, loading: false });
  }

  async sort(by) {
    const { data = [], currency = '', sortDir = 1, sortBy = '' } = this.state;
    const dir = sortDir * (by === sortBy ? -1 : 1);
    await this.setState({ sortBy: by, sortDir: dir });
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

    this.setState({ data });
  }

  render() {
    const { currency = '', currencies = [], data = [], loading = false } = this.state;

    return (
      <div id="BanksForex" className="container">
        <Card className="shadow mt-3">
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
                          const { bank = '', time = '', buy = {}, transfer = {}, sell = {} } = item;
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
    );
  }
}
