import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Form } from 'react-bootstrap';

import { apis, helper } from '../../../services';

interface IProfitProps {
  themeInput: string;
  themeTextColor: string;
  themeButtonVariant: string;
}

interface IProfitState {
  buy: number;
  sell: number;
  volume: number;
  profit: number;
}

class Profit extends Component<IProfitProps, IProfitState> {
  constructor(props: IProfitProps) {
    super(props);

    this.state = { buy: 0, sell: 0, volume: 0, profit: 0 };

    this.calculateProfit = this.calculateProfit.bind(this);
    this.updateBuy = this.updateBuy.bind(this);
    this.updateSell = this.updateSell.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
  }

  updateBuy(event: any) {
    const { value } = event.target;
    const buy = parseFloat(value);
    this.setState({ buy });
  }

  updateSell(event: any) {
    const { value } = event.target;
    const sell = parseFloat(value);
    this.setState({ sell });
  }

  updateVolume(event: any) {
    const { value } = event.target;
    const volume = parseFloat(value);
    this.setState({ volume });
  }

  async calculateProfit(event: any) {
    event.preventDefault();
    const { buy = 0, sell = 0, volume = 0 } = this.state;
    const profit = await apis.calculateProfit(buy, sell, volume);
    this.setState({ profit });
  }

  render() {
    const { buy = 0, sell = 0, volume = 0, profit = 0 } = this.state;
    const { themeButtonVariant = '', themeTextColor = '', themeInput = '' } = this.props;
    return (
      <div id="Profit" className="container-fluid">
        <div className="rounded p-3 border">
          <Form onSubmit={this.calculateProfit} className="row">
            <div className="col-sm-4">
              <Form.Group>
                <Form.Label className={themeTextColor}>
                  Buy: {helper.numberFormatter(buy * volume)}
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Buy"
                  className={`${themeInput} text-center`}
                  value={buy}
                  onChange={this.updateBuy}></Form.Control>
              </Form.Group>
            </div>
            <div className="col-sm-4">
              <Form.Group>
                <Form.Label className={themeTextColor}>
                  Sell: {helper.numberFormatter(sell * volume)}
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Sell"
                  className={`${themeInput} text-center`}
                  value={sell}
                  onChange={this.updateSell}></Form.Control>
              </Form.Group>
            </div>
            <div className="col-sm-4">
              <Form.Group>
                <Form.Label className={themeTextColor}>
                  Volume - Profit: {helper.numberFormatter(profit)}
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Volume"
                  className={`${themeInput} text-center`}
                  value={volume}
                  onChange={this.updateVolume}></Form.Control>
              </Form.Group>
            </div>
            <div className="col-sm-12">
              <Button variant={themeButtonVariant} type="submit" className="form-control">
                Calculate
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const themeInput: string = _.get(state, 'theme.input', '');
  const themeTextColor: string = _.get(state, 'theme.textColor', '');
  const themeButtonVariant: string = _.get(state, 'theme.buttonVariant', '');
  return { themeInput, themeTextColor, themeButtonVariant };
};

export default connect(mapStateToProps)(Profit);
