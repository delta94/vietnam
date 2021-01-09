import React, { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

import { apis } from '../../services';
import { numberFormatter } from '../../helper';

export default class FinanceProfit extends Component {
  constructor() {
    super();

    this.state = { buy: 0, sell: 0, volume: 0, profit: 0 };

    this.calculateProfit = this.calculateProfit.bind(this);
    this.updateBuy = this.updateBuy.bind(this);
    this.updateSell = this.updateSell.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
  }

  updateBuy(event) {
    const { value } = event.target;
    const buy = parseFloat(value);
    this.setState({ buy });
  }

  updateSell(event) {
    const { value } = event.target;
    const sell = parseFloat(value);
    this.setState({ sell });
  }

  updateVolume(event) {
    const { value } = event.target;
    const volume = parseFloat(value);
    this.setState({ volume });
  }

  async calculateProfit(event) {
    event.preventDefault();
    const { buy = 0, sell = 0, volume = 0 } = this.state;
    const profit = await apis.calculateProfit(buy, sell, volume);
    this.setState({ profit });
  }

  render() {
    const { buy = 0, sell = 0, volume = 0, profit = 0 } = this.state;
    return (
      <div id="FinanceProfit" className="container">
        <Card className="shadow mt-3">
          <Card.Body>
            <Form onSubmit={this.calculateProfit} className="row">
              <div className="col-sm-4">
                <Form.Group>
                  <Form.Label>Buy: {numberFormatter(buy * volume)}</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Buy"
                    className="text-center"
                    value={this.state.value}
                    onChange={this.updateBuy}></Form.Control>
                </Form.Group>
              </div>
              <div className="col-sm-4">
                <Form.Group>
                  <Form.Label>Sell: {numberFormatter(sell * volume)}</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Sell"
                    className="text-center"
                    value={this.state.value}
                    onChange={this.updateSell}></Form.Control>
                </Form.Group>
              </div>
              <div className="col-sm-4">
                <Form.Group>
                  <Form.Label>Volume - Profit: {numberFormatter(profit)}</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Volume"
                    className="text-center"
                    value={this.state.value}
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
