import React, { Component } from 'react';
import { Card, Form, Spinner } from 'react-bootstrap';

import { periods } from '../../../configs';
import { apis, helper } from '../../../services';

interface IFinanceHighlightsProps {}

interface IFinanceHighlightsState {
  loading: boolean;
  highlights: Array<any>;
  from: number;
  to: number;
  period: string;
}

export default class FinanceHighlights extends Component<
  IFinanceHighlightsProps,
  IFinanceHighlightsState
> {
  constructor(props: IFinanceHighlightsProps) {
    super(props);

    this.state = { loading: false, highlights: [], from: 0, to: 0, period: '' };

    this.updatePeriod = this.updatePeriod.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  async componentDidMount() {
    const period = '1M';
    const { from, to } = helper.processPeriod(period);
    this.setState({ from, to });
    await this.getStockHighlights();
  }

  async updatePeriod(event: any) {
    const { value: period } = event.target;
    const { from, to } = helper.processPeriod(period);
    this.setState({ from, to });
    await this.getStockHighlights();
  }

  async getStockHighlights() {
    const { from = 0, to = 0 } = this.state;
    this.setState({ loading: true });
    const highlights = await apis.getStockHighlights(from, to);
    this.setState({ highlights, loading: false });
  }

  renderTable(loading: boolean, highlights: Array<any> = []) {
    return (
      <div id="table">
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger"></Spinner>
          </div>
        )}
        {!loading ? (
          <div className="table-responsive table-container">
            <table className="table">
              <caption className="text-white text-center bg-danger">
                Highlights ({highlights.length})
              </caption>
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
      </div>
    );
  }

  render() {
    const { loading = false, highlights = [] } = this.state;
    return (
      <div id="FinanceHighlights" className="container-fluid">
        <Card>
          <Card.Body>
            <Card.Title className="text-center"></Card.Title>
            <Form>
              <Form.Group>
                <Form.Control as="select" value={this.state.period} onChange={this.updatePeriod}>
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
            {this.renderTable(loading, highlights)}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
