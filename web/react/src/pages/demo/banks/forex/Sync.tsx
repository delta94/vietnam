import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Spinner } from 'react-bootstrap';

import { apis } from '../../../../services';

interface IBanksForexSyncProps {
  theme: string;
}

interface IBanksForexSyncState {
  banks: Array<string>;
  loading: boolean;
  syncing: Array<string>;
}

class BanksForexSync extends Component<IBanksForexSyncProps, IBanksForexSyncState> {
  constructor(props: IBanksForexSyncProps) {
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

  renderTable() {
    const { banks = [], loading = false, syncing = [] } = this.state;
    const { theme } = this.props;

    const spinnerVariant: string = theme === 'light' ? 'danger' : 'light';
    const bgColor: string = theme === 'light' ? 'bg-danger' : 'bg-black';
    const borderColor: string = theme === 'light' ? '' : 'border-white';
    const textColor: string = theme === 'light' ? 'text-dark' : 'text-white';
    const buttonVariant: string = theme === 'light' ? 'danger' : 'light';

    return (
      <div id="table">
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant={spinnerVariant}></Spinner>
          </div>
        )}
        {!loading && (
          <div className={`table-responsive table-container rounded-lg border ${borderColor}`}>
            {banks.length ? (
              <table className="table">
                <caption className={`${bgColor} text-white text-center`}>
                  Banks ({banks.length})
                </caption>
                <thead>
                  <tr>
                    <th>#</th>
                    <th className={`${textColor}`}>ID</th>
                    <th className="text-right">
                      <Button variant={buttonVariant} onClick={() => this.syncAll()}>
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
                        <td>{index + 1}</td>
                        <td className={`${textColor}`}>{bank}</td>
                        <td align="right">
                          <Button
                            disabled={syncingFlag}
                            variant={buttonVariant}
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
    return (
      <div id="BanksForexSync" className="container-fluid">
        {this.renderTable()}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const { theme = '' } = state;
  return { theme };
};

export default connect(mapStateToProps)(BanksForexSync);
