import React, { Component } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';

import { baseAPI } from '../configs';

class BanksList extends Component {
  constructor() {
    super();
    this.state = { banks: [], loading: false };
    this.getFinanceForexBanks = this.getFinanceForexBanks.bind(this);
    this.syncForex = this.syncForex.bind(this);
  }

  async componentDidMount() {
    await this.getFinanceForexBanks();
  }

  async getFinanceForexBanks() {
    const self = this;
    self.setState({ loading: true });
    const url = `${baseAPI}/banks`;

    fetch(url)
      .then(res => res.json())
      .then((banks = []) => {
        self.setState({ banks, loading: false });
      })
      .catch(error => {
        console.error(error);
        self.setState({ banks: [], loading: false });
      });
  }

  syncForex(id) {
    const url = `${baseAPI}/banks/forex/sync`;
    console.log(`syncForex(${id})`);
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    })
      .then(res => res.json())
      .then((data = []) => {
        const { status = '' } = data;
        alert(status);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { banks = [], loading = false } = this.state;
    console.log('loading', loading);
    console.log('banks', banks);
    return (
      <div id="BanksList">
        <div className="mt-3 w-100">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Banks ({banks.length})</Card.Title>
              {loading && (
                <div className="text-center">
                  <Spinner animation="border" variant="danger"></Spinner>
                </div>
              )}
              {!loading && (
                <div className="table-responsive table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Forex</th>
                        <th>Sync</th>
                      </tr>
                    </thead>
                    <tbody>
                      {banks.length
                        ? banks.map((bank, index) => {
                            const { id = '', name = '', forex = '' } = bank;
                            return (
                              <tr key={index}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>
                                  <a href={forex} target="_blank" rel="noreferrer">
                                    Forex
                                  </a>
                                </td>
                                <td>
                                  <Button variant="danger" onClick={() => this.syncForex(id)}>
                                    Sync
                                  </Button>
                                </td>
                              </tr>
                            );
                          })
                        : ''}
                    </tbody>
                  </table>
                </div>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default BanksList;
