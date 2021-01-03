import React, { Component } from 'react';
import { Card, Form, Spinner } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

import { periods } from '../../configs';
import { addZero, processPeriod, deepClone } from '../../helper';
import { apis } from '../../services';

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

class FinanceHistory extends Component {
  constructor() {
    super();
    this.state = { loading: false, data: [], symbols: [], symbol: '', from: 0, to: 0 };
    this.updateSymbol = this.updateSymbol.bind(this);
    this.updatePeriod = this.updatePeriod.bind(this);
    this.processLabels = this.processLabels.bind(this);
    this.processDatasets = this.processDatasets.bind(this);
    this.getStockCompanies = this.getStockCompanies.bind(this);
  }

  async componentDidMount() {
    await this.getStockCompanies();
    const period = '1M';
    const symbol = 'VIC';
    const { from, to } = processPeriod(period);
    this.setState({ from, to, symbol });
    await this.getStockHistory();
  }

  async updatePeriod(event) {
    const { value: period } = event.target;
    const { from, to } = processPeriod(period);
    this.setState({ from, to });
    await this.getStockHistory();
  }

  async updateSymbol(event) {
    const { value: symbol } = event.target;
    this.setState({ symbol });
    await this.getStockHistory();
  }

  async getStockCompanies() {
    this.setState({ loading: true });
    const companies = await apis.getStockCompanies();
    const symbols = companies.map(company => company.symbol);
    const symbol = symbols[0];
    this.setState({ symbols, symbol, loading: false });
  }

  async getStockHistory() {
    const { from = 0, to = 0, symbol = '' } = this.state;
    const result = await apis.getStockHistory(symbol, from, to);
    const labels = this.processLabels(result);
    const datasets = this.processDatasets(labels, result);
    console.log(labels, datasets);
    this.setState({ data: { labels, datasets }, loading: false });
  }

  processDatasets(historyLabels, historyData) {
    const datasets = historyData.map(item => {
      const { history = [], symbol: label = '' } = item;
      const data = historyLabels.map(label => {
        const [yyyy, mm, dd] = label.split('/');
        const year = parseInt(yyyy);
        const month = parseInt(mm);
        const date = parseInt(dd);
        let { close = 0 } =
          history.find(i => i.year === year && i.month === month && i.date === date) || {};
        return close;
      });
      return { label, data };
    });

    return datasets.map(item => {
      const { label = '', data = [] } = item;

      return deepClone(
        Object.assign(datasetsOptions, {
          label,
          data
        })
      );
    });
  }

  processLabels(data) {
    let labels = [];
    for (const item of data) {
      const { history = [] } = item;
      const _labels = history.map(value => {
        const { timestamp } = value;
        const d = new Date(timestamp);
        const year = addZero(d.getFullYear());
        const month = addZero(d.getMonth() + 1);
        const date = addZero(d.getDate());
        return `${year}/${month}/${date}`;
      });
      labels = labels.concat(_labels);
    }

    return labels.filter((value, index, array) => array.indexOf(value) === index).sort();
  }

  render() {
    const { loading = false, data = {}, symbols = [], symbol = '' } = this.state;
    return (
      <div className="FinanceHistory">
        <div className="w-100 mt-3">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center">History ({symbol})</Card.Title>
              <Form className="row">
                <div class="col-sm-6">
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
                </div>
                <div class="col-sm-6">
                  <Form.Group>
                    <Form.Control
                      as="select"
                      defaultValue="VIC"
                      value={this.state.value}
                      onChange={this.updateSymbol}>
                      {symbols.map((symbol, index) => {
                        return (
                          <option key={index} value={symbol}>
                            {symbol}
                          </option>
                        );
                      })}
                    </Form.Control>
                  </Form.Group>
                </div>
              </Form>
              {loading && (
                <div className="text-center">
                  <Spinner animation="border" variant="danger"></Spinner>
                </div>
              )}
              {!loading ? <Line data={data} options={chartOptions}></Line> : ''}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default FinanceHistory;
