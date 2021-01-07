import React, { Component } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

class BanksList extends Component {
  constructor() {
    super();

    this.state = { banks: [], loading: false };

    this.getForexBanks = this.getForexBanks.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.syncForex = this.syncForex.bind(this);
  }

  async componentDidMount() {
    await this.getForexBanks();
  }

  async getForexBanks() {
    this.setState({ loading: true });
    const { banks = [] } = await apis.getForexBanks();
    this.setState({ banks, loading: false });
  }

  async syncForex(id) {
    const message = await apis.syncForex();
    alert(message);
  }

  renderTable(loading, banks = []) {
    return (
      <div id="table">
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
      </div>
    );
  }

  render() {
    const { banks = [], loading = false } = this.state;
    console.log('loading', loading);
    console.log('banks', banks);
    return (
      <div id="BanksList">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center">Banks ({banks.length})</Card.Title>
              {this.renderTable(loading, banks)}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default BanksList;
