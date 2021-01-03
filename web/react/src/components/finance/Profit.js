import React, { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

import { apis } from '../../services';
import { numberFormatter } from '../../helper';

class FinanceProfit extends Component {
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
      <div className="FinanceProfit">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>
              <Form onSubmit={this.calculateProfit} className="row">
                <div className="col-sm-3">
                  <Form.Group>
                    <Form.Control
                      type="number"
                      placeholder="Buy"
                      className="text-center"
                      value={this.state.value}
                      onChange={this.updateBuy}></Form.Control>
                  </Form.Group>
                </div>
                <div className="col-sm-3">
                  <Form.Group>
                    <Form.Control
                      type="number"
                      placeholder="Sell"
                      className="text-center"
                      value={this.state.value}
                      onChange={this.updateSell}></Form.Control>
                  </Form.Group>
                </div>
                <div className="col-sm-3">
                  <Form.Group>
                    <Form.Control
                      type="number"
                      placeholder="Volume"
                      className="text-center"
                      value={this.state.value}
                      onChange={this.updateVolume}></Form.Control>
                  </Form.Group>
                </div>
                <div className="col-sm-3">
                  <Button variant="danger" type="submit" className="form-control">
                    Calculate
                  </Button>
                </div>
                <div className="col-sm-3 text-center">{numberFormatter(buy * volume)}</div>
                <div className="col-sm-3 text-center">{numberFormatter(sell * volume)}</div>
                <div className="col-sm-3"></div>
                <div className="col-sm-3 text-center">{numberFormatter(profit)}</div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default FinanceProfit;
