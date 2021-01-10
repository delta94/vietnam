import React, { Component } from 'react';
import { Card, Form, Spinner } from 'react-bootstrap';

import { periods } from '../../../configs';
import { apis, helper } from '../../../services';

interface IFinancePotentialsProps {}

interface IFinancePotentialsState {
  loading: boolean;
  potentials: Array<any>;
  from: number;
  to: number;
  period: string;
}

export default class FinancePotentials extends Component<
  IFinancePotentialsProps,
  IFinancePotentialsState
> {
  constructor(props: IFinancePotentialsProps) {
    super(props);

    this.state = { loading: false, potentials: [], from: 0, to: 0, period: '' };

    this.updatePeriod = this.updatePeriod.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  async componentDidMount() {
    const period = '1M';
    const { from, to } = helper.processPeriod(period);
    await this.setState({ from, to });
    await this.getStockPotentials();
  }

  async updatePeriod(event: any) {
    const { value: period } = event.target;
    const { from, to } = helper.processPeriod(period);
    this.setState({ from, to });
    await this.getStockPotentials();
  }

  async getStockPotentials() {
    const { from = 0, to = 0 } = this.state;
    this.setState({ loading: true });
    const potentials = await apis.getStockPotentials(from, to);
    this.setState({ potentials, loading: false });
  }

  renderTable(loading: boolean, potentials: Array<any> = []) {
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
                Potentials ({potentials.length})
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
      </div>
    );
  }

  render() {
    const { loading = false, potentials = [] } = this.state;
    return (
      <div id="FinancePotentials" className="container">
        <Card className="shadow mt-3">
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue="1M"
                  value={this.state.period}
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
            {this.renderTable(loading, potentials)}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
