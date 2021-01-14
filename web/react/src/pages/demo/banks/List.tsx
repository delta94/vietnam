import React, { Component } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';

import { apis } from '../../../services';

interface IBanksListProps {}

interface IBanksListState {
  banks: Array<string>;
  loading: boolean;
}

export default class BanksList extends Component<IBanksListProps, IBanksListState> {
  constructor(props: IBanksListProps) {
    super(props);

    this.state = { banks: [], loading: false };

    this.getForexBanks = this.getForexBanks.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.syncForexRates = this.syncForexRates.bind(this);
    this.syncAll = this.syncAll.bind(this);
  }

  async componentDidMount() {
    await this.getForexBanks();
  }

  async getForexBanks() {
    await this.setState({ loading: true });
    const banks = await apis.getForexBanks();
    await this.setState({ banks, loading: false });
  }

  async syncForexRates(id: string) {
    const message = await apis.syncForexRates(id);
    alert(message);
  }

  async syncAll() {
    const { banks = [] } = this.state;
    for (const bank of banks) {
      const message: string = await apis.syncForexRates(bank);
      console.log(bank, message);
    }
  }

  renderTable(loading: boolean, banks: Array<any> = []) {
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
                  <th>
                    <Button variant="danger" onClick={() => this.syncAll()}>
                      SYNC ALL
                    </Button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {banks.length
                  ? banks.map((bank, index) => {
                      return (
                        <tr key={index}>
                          <td>{bank}</td>
                          <td>
                            <Button variant="danger" onClick={() => this.syncForexRates(bank)}>
                              SYNC
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
        <Card className="shadow mt-3 mb-5">
          <Card.Body>
            <Card.Title className="text-center">Banks ({banks.length})</Card.Title>
            {this.renderTable(loading, banks)}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
