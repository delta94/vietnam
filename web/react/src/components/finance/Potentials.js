import React, { Component } from 'react';
import { Card, Form, Spinner } from 'react-bootstrap';

import { periods } from '../../configs';
import { processPeriod } from '../../helper';
import { apis } from '../../services';

class FinancePotentials extends Component {
  constructor() {
    super();
    this.state = { loading: false, potentials: [], from: 0, to: 0 };
    this.updatePeriod = this.updatePeriod.bind(this);
  }

  async componentDidMount() {
    const period = '1M';
    const { from, to } = processPeriod(period);
    this.setState({ from, to });
    await this.getStockPotentials();
  }

  async updatePeriod(event) {
    const { value: period } = event.target;
    const { from, to } = processPeriod(period);
    this.setState({ from, to });
    await this.getStockPotentials();
  }

  async getStockPotentials() {
    const self = this;
    const { from = 0, to = 0 } = this.state;
    self.setState({ loading: true });
    const potentials = await apis.getStockPotentials(from, to);
    self.setState({ potentials, loading: false });
  }

  render() {
    const { loading = false, potentials = [] } = this.state;
    return (
      <div className="FinancePotentials">
        <div className="w-100 mt-3">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center">Potential</Card.Title>
              <Form>
                <Form.Group>
                  <Form.Control
                    as="select"
                    defaultValue="1M"
                    value={this.state.value}
                    onChange={this.updatePeriod}>
                    {periods.map((period, index) => {
                      const { label, value } = period;
                      return (
                        <option key={index} value={value}>
                          {label}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
              </Form>
              {loading && (
                <div className="text-center">
                  <Spinner animation="border" variant="danger"></Spinner>
                </div>
              )}
              {!loading ? (
                <div className="table-responsive table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Latest</th>
                        <th>Diff</th>
                        <th>Median</th>
                        <th>Average</th>
                        <th>Middle</th>
                      </tr>
                    </thead>
                    <tbody>
                      {potentials.length
                        ? potentials.map((potential, index) => {
                            const {
                              symbol = '',
                              group = '',
                              startDate = '',
                              name = '',
                              industry = '',
                              subsector = '',
                              low = false,
                              latest,
                              latestDate,
                              min,
                              minDate,
                              max,
                              maxDate,
                              diff,
                              diffToMin,
                              diffToMax,
                              median,
                              average,
                              middle
                            } = potential;
                            return (
                              <tr key={index}>
                                <td>
                                  <div>{symbol}</div>
                                  <div>{group}</div>
                                  <div>{startDate}</div>
                                </td>
                                <td>
                                  <div>{name}</div>
                                  <div>{industry}</div>
                                  <div>{subsector}</div>
                                </td>
                                <td>
                                  <div className={low ? 'text-danger' : 'text-success'}>
                                    <div>
                                      {latest} ({latestDate})
                                    </div>
                                    <div>
                                      {min} ({minDate})
                                    </div>
                                    <div>
                                      {max} ({maxDate})
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className={low ? 'text-danger' : 'text-success'}>
                                    <div>{diff}</div>
                                    <div>{diffToMin}</div>
                                    <div>{diffToMax}</div>
                                  </div>
                                </td>
                                <td>{median}</td>
                                <td>{average}</td>
                                <td>{middle}</td>
                              </tr>
                            );
                          })
                        : ''}
                    </tbody>
                  </table>
                </div>
              ) : (
                ''
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default FinancePotentials;
