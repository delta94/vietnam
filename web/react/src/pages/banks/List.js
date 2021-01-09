import React, { Component } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

export default class BanksList extends Component {
  constructor() {
    super();

    this.state = { banks: [], loading: false };

    this.getForexBanks = this.getForexBanks.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.syncForexRates = this.syncForexRates.bind(this);
  }

  async componentDidMount() {
    await this.getForexBanks();
  }

  async getForexBanks() {
    this.setState({ loading: true });
    const { banks = [] } = await apis.getForexBanks();
    this.setState({ banks, loading: false });
  }

  async syncForexRates(id) {
    const message = await apis.syncForexRates();
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
                  <th>Sync</th>
                </tr>
              </thead>
              <tbody>
                {banks.length
                  ? banks.map((bank, index) => {
                      const { id = '', name = '', url = '' } = bank;
                      return (
                        <tr key={index}>
                          <td>{id}</td>
                          <td>
                            <a href={url} target="_blank" rel="noreferrer">
                              {name}
                            </a>
                          </td>
                          <td>
                            <Button variant="danger" onClick={() => this.syncForexRates(id)}>
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

    return (
      <div id="BanksList" className="container">
        <Card className="shadow mt-3">
          <Card.Body>
            <Card.Title className="text-center">Banks ({banks.length})</Card.Title>
            {this.renderTable(loading, banks)}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
