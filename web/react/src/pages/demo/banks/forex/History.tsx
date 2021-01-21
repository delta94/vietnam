import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Form, Spinner } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

import { apis, graphql, helper } from '../../../../services';

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

interface IHistoryProps {}

interface IHistoryState {
  bank: string;
  loading: boolean;
  banks: Array<any>;
  currency: string;
  currencies: Array<any>;
  data: any;
}

class History extends Component<IHistoryProps, IHistoryState> {
  constructor(props: IHistoryProps) {
    super(props);
    this.state = { loading: false, bank: '', banks: [], currency: '', currencies: [], data: {} };
    this.getForexBanks = this.getForexBanks.bind(this);
    this.getForexRates = this.getForexRates.bind(this);
    this.processRates = this.processRates.bind(this);
  }

  async componentDidMount() {
    await this.getForexBanks();
    await this.getForexRates();
  }

  async getForexBanks() {
    await this.setState({ loading: true });
    const banks = await apis.getForexBanks();
    const bank: string = banks[0] || '';
    await this.setState({ bank, banks, loading: false });
  }

  async getForexRates() {
    const { bank = '' } = this.state;

    if (!bank) return;
    const options = { sort: 'TIMESTAMP_ASC', filter: { bank } };
    const data = await graphql.find(
      'financeForexRate',
      ['bank', 'date', 'month', 'year', 'hour', 'minute', 'rates'],
      options
    );

    const { rates = [] } = data[0];
    const currencies = rates.map((rate: any) => rate.code).sort();
    const currency = currencies[0] || '';

    const labels = data.map((item: any) => {
      const { year, month, date, hour, minute } = item;
      return `${year}/${month}/${date} ${hour}:${minute}`;
    });

    const datasets = this.processRates(data, currency);

    await this.setState({ currencies, currency, data: { labels, datasets } });
  }

  processRates(data: any, currency: string) {
    const rates = data.map((item: any) => {
      const { rates } = item;
      const rate = rates.find((rate: any) => rate.code === currency);
      const { buy, sell, transfer } = rate;
      return { buy, sell, transfer };
    });

    const buyData = rates.map((rate: any) => rate.buy);
    const transferData = rates.map((rate: any) => rate.transfer);
    const sellData = rates.map((rate: any) => rate.sell);

    const lines = ['buy', 'transfer', 'sell'];

    return [buyData, transferData, sellData].map((data, index) => {
      const label = lines[index];
      return helper.deepClone(
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
      <div id="History" className="container-fluid">
        <Card>
          <Card.Body>
            <Card.Title>History</Card.Title>
            <Form className="row">
              <div className="col-sm-6">
                <Form.Group>
                  <Form.Control as="select" value={bank}>
                    <option value={''}>Bank</option>
                    {banks.map((bank, index) => {
                      return (
                        <option key={index} value={bank}>
                          {bank}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="col-sm-6">
                <Form.Group>
                  <Form.Control as="select" value={currency}>
                    <option value={''}>Currency</option>
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

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(History);
