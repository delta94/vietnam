import React, { Component } from 'react';
import { Card, Form, Spinner } from 'react-bootstrap';

import { baseAPI, periods } from '../configs';
import { processPeriod } from '../helper';

class FinanceHighlights extends Component {
  constructor() {
    super();
    this.state = { loading: false, highlights: [], from: 0, to: 0 };
    this.updatePeriod = this.updatePeriod.bind(this);
  }

  async componentDidMount() {
    const period = '1M';
    const { from, to } = processPeriod(period);
    this.setState({ from, to });
    await this.getStockHighlights();
  }

  async updatePeriod(event) {
    const { value: period } = event.target;
    const { from, to } = processPeriod(period);
    this.setState({ from, to });
    await this.getStockHighlights();
  }

  async getStockHighlights() {
    const self = this;
    const { from = 0, to = 0 } = this.state;
    self.setState({ loading: true });
    const url = `${baseAPI}/stock/highlights`;
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to })
    })
      .then(res => res.json())
      .then((highlights = []) => {
        self.setState({ highlights, loading: false });
      })
      .catch(error => {
        console.error(error);
        self.setState({ highlights: [], loading: false });
      });
  }

  render() {
    const { loading = false, highlights = [] } = this.state;
    return (
      <div className="FinanceHighlights">
        <div className="w-100 mt-3">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Highlight</Card.Title>
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
                      {highlights.length
                        ? highlights.map((highlight, index) => {
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
                            } = highlight;
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

export default FinanceHighlights;
