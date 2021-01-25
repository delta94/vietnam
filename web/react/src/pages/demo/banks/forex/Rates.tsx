import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';

import { apis } from '../../../../services';
import { NavPills, Table } from '../../../../components';

interface IRatesProps {
  themeInput: string;
  themeBorder: string;
  themeTextColor: string;
  themeSpinnerVariant: string;
  themePrimaryBackgroundColor: string;
}

interface IRatesState {
  rates: Array<any>;
  currency: string;
  currencies: Array<string>;
  loading: boolean;
  sortBy: string;
  sortDir: number;
}

class Rates extends Component<IRatesProps, IRatesState> {
  constructor(props: IRatesProps) {
    super(props);

    this.state = {
      rates: [],
      currency: '',
      currencies: [],
      loading: false,
      sortBy: '',
      sortDir: 1
    };

    this.getBanksForexRates = this.getBanksForexRates.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.updateCurrency = this.updateCurrency.bind(this);
  }

  async componentDidMount() {
    await this.getBanksForexRates();
  }

  async getBanksForexRates() {
    await this.setState({ loading: true });
    const rates = await apis.getBanksForexRates();
    const currencies = _.uniq(rates.map(rate => rate.code)).sort();
    const [currency] = currencies;
    await this.setState({ rates, currency, currencies, loading: false });
  }

  async updateCurrency(event: any) {
    const { value: currency } = event.target;
    await this.setState({ currency });
  }

  renderForm() {
    const { currencies = [], currency = '' } = this.state;
    const { themeInput } = this.props;
    return (
      <Form>
        <Form.Group>
          <Form.Control
            as="select"
            className={themeInput}
            value={currency}
            onChange={this.updateCurrency}>
            <option value={''}>Currency</option>
            {currencies.map((currency, index) => {
              return (
                <option key={index} value={currency}>
                  {currency.toUpperCase()}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }

  render() {
    const { loading = false, rates = [], currency = '' } = this.state;

    const filterRates = rates.filter(rate => rate.code === currency);

    const rowConfigs = [
      { header: 'Bank', key: 'bank' },
      { header: 'Code', key: 'code' },
      { header: 'Buy Cash', key: 'buyCash' },
      { header: 'Buy Transfer', key: 'buyTransfer' },
      { header: 'Sell Cash', key: 'sellCash' },
      { header: 'Sell Transfer', key: 'sellTransfer' },
      { header: 'Last Updated At', key: 'time' }
    ];

    console.log(filterRates);

    return (
      <div id="Rates" className="container-fluid">
        <NavPills group={'banks'}></NavPills>
        {!loading && this.renderForm()}{' '}
        <Table
          rowIndexEnabled={true}
          caption={`Forex Rates ${currency}`}
          loading={loading}
          rows={filterRates}
          rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const themeInput: string = _.get(state, 'theme.input', '');
  const themeBorder: string = _.get(state, 'theme.border', '');
  const themeTextColor: string = _.get(state, 'theme.textColor', '');
  const themeSpinnerVariant: string = _.get(state, 'theme.spinnerVariant', '');
  const themePrimaryBackgroundColor: string = _.get(state, 'theme.primaryBackgroundColor', '');
  return {
    themeInput,
    themeBorder,
    themeTextColor,
    themeSpinnerVariant,
    themePrimaryBackgroundColor
  };
};

export default connect(mapStateToProps)(Rates);
