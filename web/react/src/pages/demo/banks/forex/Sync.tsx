import React, { Component } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';

import { apis } from '../../../../services';

interface IBanksListProps {}

interface IBanksListState {
  banks: Array<string>;
  loading: boolean;
  syncing: Array<string>;
}

export default class BanksList extends Component<IBanksListProps, IBanksListState> {
  constructor(props: IBanksListProps) {
    super(props);

    this.state = { banks: [], syncing: [], loading: false };

    this.getForexBanks = this.getForexBanks.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.syncForexRates = this.syncForexRates.bind(this);
    this.syncAll = this.syncAll.bind(this);
    this.addToSyncing = this.addToSyncing.bind(this);
  }

  async componentDidMount() {
    await this.getForexBanks();
  }

  async getForexBanks() {
    await this.setState({ loading: true });
    const banks = await apis.getForexBanks();
    await this.setState({ banks, loading: false });
  }

  async syncForexRates(id: string, index: number = 0) {
    await this.addToSyncing(id);
    const message: string = await apis.syncForexRates(id);
    await this.removeFromSyncing(id);
    console.log(index, id, message);
  }

  async addToSyncing(id: string) {
    const { syncing = [] } = this.state;
    const index = syncing.indexOf(id);
    if (index !== -1) return;
    syncing.push(id);
    console.log('addToSyncing', syncing);
    await this.setState({ syncing });
  }

  async removeFromSyncing(id: string) {
    let { syncing = [] } = this.state;
    syncing = syncing.filter(item => item !== id);
    console.log('removeFromSyncing', syncing);
    await this.setState({ syncing });
  }

  async syncAll() {
    const { banks = [] } = this.state;
    let index: number = 0;
    for (const id of banks) {
      index++;
      await this.syncForexRates(id, index);
    }
  }

  renderTable(loading: boolean, banks: Array<any> = [], syncing: Array<string> = []) {
    return (
      <div id="table">
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger"></Spinner>
          </div>
        )}
        {!loading && (
          <div className="table-responsive table-container">
            {banks.length ? (
              <table className="table">
                <caption className="bg-danger text-white text-center">
                  Banks ({banks.length})
                </caption>
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
                  {banks.map((bank, index) => {
                    const syncingFlag: boolean = syncing.includes(bank);
                    return (
                      <tr key={index}>
                        <td>{bank}</td>
                        <td>
                          <Button
                            disabled={syncingFlag}
                            variant="danger"
                            onClick={() => this.syncForexRates(bank)}>
                            {syncingFlag ? (
                              <Spinner animation="border" variant="light"></Spinner>
                            ) : (
                              'SYNC'
                            )}
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              ''
            )}
          </div>
        )}
      </div>
    );
  }

  render() {
    const { banks = [], loading = false, syncing = [] } = this.state;

    return (
      <div id="BanksList" className="container">
        <Card className="shadow mt-3 mb-5">
          <Card.Body>{this.renderTable(loading, banks, syncing)}</Card.Body>
        </Card>
      </div>
    );
  }
}
