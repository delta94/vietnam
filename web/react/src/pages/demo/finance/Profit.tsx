import React, { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

import { apis, helper } from '../../../services';

interface IFinanceProfitProps {}

interface IFinanceProfitState {
  buy: number;
  sell: number;
  volume: number;
  profit: number;
}

export default class FinanceProfit extends Component<IFinanceProfitProps, IFinanceProfitState> {
  constructor(props: IFinanceProfitProps) {
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
    return (
      <div id="FinanceProfit" className="container">
        <Card className="shadow mt-3 mb-5">
          <Card.Body>
            <Form onSubmit={this.calculateProfit} className="row">
              <div className="col-sm-4">
                <Form.Group>
                  <Form.Label>Buy: {helper.numberFormatter(buy * volume)}</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Buy"
                    className="text-center"
                    value={this.state.buy}
                    onChange={this.updateBuy}></Form.Control>
                </Form.Group>
              </div>
              <div className="col-sm-4">
                <Form.Group>
                  <Form.Label>Sell: {helper.numberFormatter(sell * volume)}</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Sell"
                    className="text-center"
                    value={this.state.sell}
                    onChange={this.updateSell}></Form.Control>
                </Form.Group>
              </div>
              <div className="col-sm-4">
                <Form.Group>
                  <Form.Label>Volume - Profit: {helper.numberFormatter(profit)}</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Volume"
                    className="text-center"
                    value={this.state.volume}
                    onChange={this.updateVolume}></Form.Control>
                </Form.Group>
              </div>
              <div className="col-sm-12">
                <Button variant="danger" type="submit" className="form-control">
                  Calculate
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
