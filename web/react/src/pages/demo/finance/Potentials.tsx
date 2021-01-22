import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Form, Spinner } from 'react-bootstrap';

import { periods } from '../../../configs';
import { apis, helper } from '../../../services';

interface IPotentialsProps {}

interface IPotentialsState {
  loading: boolean;
  potentials: Array<any>;
  from: number;
  to: number;
  period: string;
}

class Potentials extends Component<IPotentialsProps, IPotentialsState> {
  constructor(props: IPotentialsProps) {
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

  renderTable() {
    const { loading = false, potentials = [] } = this.state;
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
    const { period } = this.state;
    return (
      <div id="Potentials" className="container-fluid">
        <Card>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Control as="select" value={period} onChange={this.updatePeriod}>
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
            {this.renderTable()}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Potentials);