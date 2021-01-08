import React, { Component } from 'react';
import { Card, Form, Spinner } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

import { apis } from '../../services';
import { find } from '../../graphql';
import { deepClone } from '../../helper';

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

export default class BanksHistory extends Component {
  constructor() {
    super();
    this.state = { loading: false, bank: '', banks: [], currency: '', currencies: [] };
    this.getForexBanks = this.getForexBanks.bind(this);
    this.getFinanceForexRatesData = this.getFinanceForexRatesData.bind(this);
    this.processRates = this.processRates.bind(this);
  }

  async componentDidMount() {
    await this.getForexBanks();
    await this.getFinanceForexRatesData();
  }

  async getForexBanks() {
    this.setState({ loading: true });
    const { bank, banks } = await apis.getForexBanks();
    this.setState({ bank, banks, loading: false });
  }

  async getFinanceForexRatesData() {
    const { bank = '' } = this.state;

    if (!bank) return;
    const options = { sort: 'TIMESTAMP_ASC', filter: { bank } };
    const data = await find(
      'financeForexRate',
      ['bank', 'date', 'month', 'year', 'hour', 'minute', 'rates'],
      options
    );

    const { rates = [] } = data[0];
    const currencies = rates.map(rate => rate.code).sort();
    const currency = currencies[0] || '';

    const labels = data.map(item => {
      const { year, month, date, hour, minute } = item;
      return `${year}/${month}/${date} ${hour}:${minute}`;
    });

    const datasets = this.processRates(data, currency);

    this.setState({ currencies, currency, data: { labels, datasets } });
  }

  processRates(data, currency) {
    const rates = data.map(item => {
      const { rates } = item;
      const rate = rates.find(rate => rate.code === currency);
      const { buy, sell, transfer } = rate;
      return { buy, sell, transfer };
    });

    const buyData = rates.map(rate => rate.buy);
    const transferData = rates.map(rate => rate.transfer);
    const sellData = rates.map(rate => rate.sell);

    const lines = ['buy', 'transfer', 'sell'];

    return [buyData, transferData, sellData].map((data, index) => {
      const label = lines[index];
      return deepClone(
        Object.assign(datasetsOptions, {
          label,
          data
        })
      );
    });
  }

  render() {
    const {
      bank = '',
      banks = [],
      currency = '',
      currencies = [],
      data = {},
      loading = false
    } = this.state;

    return (
      <div id="BanksHistory" className="container">
        <Card className="shadow mt-3">
          <Card.Body>
            <Card.Title>History</Card.Title>
            <Form className="row">
              <div className="col-sm-6">
                <Form.Group>
                  <Form.Control as="select" defaultValue={bank} value={this.state.value}>
                    {banks.map((bank, index) => {
                      return (
                        <option key={index} value={bank.name}>
                          {bank.name}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="col-sm-6">
                <Form.Group>
                  <Form.Control as="select" defaultValue={currency} value={this.state.value}>
                    {currencies.map((currency, index) => {
                      return (
                        <option key={index} value={currency}>
                          {currency}
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
    );
  }
}
