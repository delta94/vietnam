import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Form, Spinner } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

import { periods } from '../../../configs';
import { NavPills } from '../../../components';
import { apis, helper } from '../../../services';

const datasetsOptions = {
  fill: false,
  lineTension: 0.1,
  backgroundColor: 'rgba(75,192,192,0.4)',
  borderColor: 'rgba(75,192,192,1)',
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderColor: 'rgba(75,192,192,1)',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10
};

const chartOptions = {
  responsive: true,
  annotation: {
    annotations: [
      {
        drawTime: 'afterDraw',
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: 70,
        borderColor: '#000000',
        borderWidth: 2,
        label: {
          backgroundColor: 'red',
          content: 'global plugin',
          enabled: true,
          position: 'center'
        }
      }
    ]
  }
};

interface IHistoryProps {
  themeInput: string;
  themeTextColor: string;
}

interface IHistoryState {
  loading: boolean;
  data: any;
  symbols: Array<any>;
  symbol: string;
  from: number;
  to: number;
  periods: Array<any>;
  period: string;
}
class History extends Component<IHistoryProps, IHistoryState> {
  constructor(props: IHistoryProps) {
    super(props);

    this.state = {
      periods: periods,
      loading: false,
      data: {},
      symbols: [],
      symbol: '',
      from: 0,
      to: 0,
      period: ''
    };

    this.updateSymbol = this.updateSymbol.bind(this);
    this.updatePeriod = this.updatePeriod.bind(this);
    this.processLabels = this.processLabels.bind(this);
    this.processDatasets = this.processDatasets.bind(this);
    this.getStockCompanies = this.getStockCompanies.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  async componentDidMount() {
    await this.getStockCompanies();
    const period = '1M';
    const symbol = 'VIC';
    const { from, to } = helper.processPeriod(period);
    await this.setState({ from, to, symbol });
    await this.getStockHistory();
  }

  async updatePeriod(event: any) {
    const { value: period } = event.target;
    const { from, to } = helper.processPeriod(period);
    await this.setState({ period, from, to });
    await this.getStockHistory();
  }

  async updateSymbol(event: any) {
    const { value: symbol } = event.target;
    await this.setState({ symbol });
    await this.getStockHistory();
  }

  async getStockCompanies() {
    this.setState({ loading: true });
    const companies = await apis.getStockCompanies();
    const symbols = companies.map((company: any) => company.symbol);
    const symbol = symbols[0];
    this.setState({ symbols, symbol, loading: false });
  }

  async getStockHistory() {
    const { from = 0, to = 0, symbol = '' } = this.state;
    const result = await apis.getStockHistory(symbol, from, to);
    const labels = this.processLabels(result);
    const datasets = this.processDatasets(labels, result);
    this.setState({ data: { labels, datasets }, loading: false });
  }

  processDatasets(historyLabels: Array<any>, historyData: Array<any>) {
    const datasets = historyData.map((item: any) => {
      const { history = [], symbol: label = '' } = item;
      const data = historyLabels.map(label => {
        const [yyyy, mm, dd] = label.split('/');
        const year = parseInt(yyyy);
        const month = parseInt(mm);
        const date = parseInt(dd);
        let { close = 0 } =
          history.find((i: any) => i.year === year && i.month === month && i.date === date) || {};
        return close;
      });
      return { label, data };
    });

    return datasets.map((item: any) => {
      const { label = '', data = [] } = item;

      return helper.deepClone(
        Object.assign(datasetsOptions, {
          label,
          data
        })
      );
    });
  }

  processLabels(data: Array<any>) {
    let labels: Array<string> = [];
    for (const item of data) {
      const { history = [] } = item;
      const _labels: Array<string> = history.map((value: any) => {
        const { timestamp } = value;
        const d = new Date(timestamp);
        const year = helper.addZero(d.getFullYear());
        const month = helper.addZero(d.getMonth() + 1);
        const date = helper.addZero(d.getDate());
        return `${year}/${month}/${date}`;
      });
      labels = labels.concat(_labels);
    }

    return labels.filter((value, index, array) => array.indexOf(value) === index).sort();
  }

  renderForm() {
    const { periods = [], period = '', symbols = [], symbol = '' } = this.state;
    const { themeInput = '' } = this.props;
    return (
      <Form className="row">
        <div className="col-sm-6">
          <Form.Group>
            <Form.Control
              as="select"
              className={themeInput}
              value={period}
              onChange={this.updatePeriod}>
              {periods.map((item: any, index: number) => {
                const { label, value } = item;
                return (
                  <option key={index} value={value}>
                    {label}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
        </div>
        <div className="col-sm-6">
          <Form.Group>
            <Form.Control
              as="select"
              className={themeInput}
              value={symbol}
              onChange={this.updateSymbol}>
              {symbols.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
        </div>
      </Form>
    );
  }

  render() {
    const { loading = false, data = {}, symbol = '' } = this.state;
    const { themeTextColor = '' } = this.props;
    return (
      <div id="History" className="container-fluid">
        <NavPills group={'finance'}></NavPills>
        <h3 className={`${themeTextColor} text-center`}>History ({symbol})</h3>
        {this.renderForm()}
        <Card>
          <Card.Body>
            {loading && (
              <div className="text-center">
                <Spinner animation="border" variant="danger"></Spinner>
              </div>
            )}
            {!loading ? <Line data={data} options={chartOptions}></Line> : ''}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const themeInput: string = _.get(state, 'theme.input', '');
  const themeTextColor: string = _.get(state, 'theme.textColor', '');
  return { themeInput, themeTextColor };
};

export default connect(mapStateToProps)(History);
