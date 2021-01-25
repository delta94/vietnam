import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';

import { Table } from '../../../components';
import { periods } from '../../../configs';
import { apis, helper } from '../../../services';

interface IPotentialsProps {
  themeInput: string;
}

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
    this.renderForm = this.renderForm.bind(this);
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

  renderForm() {
    const { period = '' } = this.state;
    const { themeInput = '' } = this.props;
    return (
      <Form>
        <Form.Group>
          <Form.Control
            as="select"
            className={`${themeInput}`}
            value={period}
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
    );
  }
  render() {
    const { potentials, loading } = this.state;
    const rowConfigs = [
      { header: 'Symbol', key: 'symbol' },
      { header: 'Name', key: 'name' },
      { header: 'Latest', key: 'latest' },
      { header: 'Diff', key: 'diff' },
      { header: 'Median', key: 'median' },
      { header: 'Average', key: 'average' }
    ];

    const rows = potentials.map((potential, index) => {
      const {
        symbol = '',
        group = '',
        startDate = '',
        name = '',
        industry = '',
        subsector = '',
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
        average
      } = potential;
      const symbolString = `${symbol} - ${group} - ${startDate}`;
      const nameString = `${name} - ${industry} - ${subsector}`;
      const latestString = `${latest} (${latestDate}) - ${min} (${minDate}) - ${max} (${maxDate})`;
      const diffString = `${diff} - ${diffToMin} - ${diffToMax}`;
      return {
        symbol: symbolString,
        name: nameString,
        latest: latestString,
        diff: diffString,
        median,
        average
      };
    });
    return (
      <div id="Potentials" className="container-fluid">
        {this.renderForm()}
        <Table
          rowIndexEnabled={true}
          caption={`Highlights`}
          loading={loading}
          rows={rows}
          rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const themeInput: string = _.get(state, 'theme.input', '');
  return { themeInput };
};

export default connect(mapStateToProps)(Potentials);
