import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Spinner } from 'react-bootstrap';

import { apis } from '../../../../services';

interface ISyncProps {
  themeBorder: string;
  themeTextColor: string;
  themeSpinnerVariant: string;
  themeRevertSpinnerVariant: string;
  themePrimaryBackgroundColor: string;
  themeButtonVariant: string;
}

interface ISyncState {
  banks: Array<string>;
  loading: boolean;
  syncing: Array<string>;
}

class Sync extends Component<ISyncProps, ISyncState> {
  constructor(props: ISyncProps) {
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
    const {
      themeBorder = '',
      themeTextColor = '',
      themeSpinnerVariant = '',
      themePrimaryBackgroundColor = '',
      themeRevertSpinnerVariant = '',
      themeButtonVariant = ''
    } = this.props;

    return (
      <div id="table">
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant={themeSpinnerVariant}></Spinner>
          </div>
        )}
        {!loading && (
          <div className={`table-responsive table-container rounded-lg border ${themeBorder}`}>
            {banks.length ? (
              <table className="table">
                <caption className={`${themePrimaryBackgroundColor} text-white text-center`}>
                  Banks ({banks.length})
                </caption>
                <thead>
                  <tr>
                    <th className={`${themeTextColor}`}>#</th>
                    <th className={`${themeTextColor}`}>ID</th>
                    <th className="text-right">
                      <Button variant={themeButtonVariant} onClick={() => this.syncAll()}>
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
                        <td className={`${themeTextColor}`}>{index + 1}</td>
                        <td className={`${themeTextColor}`}>{bank}</td>
                        <td align="right">
                          <Button
                            disabled={syncingFlag}
                            variant={themeButtonVariant}
                            onClick={() => this.syncForexRates(bank)}>
                            {syncingFlag ? (
                              <Spinner
                                animation="border"
                                variant={themeRevertSpinnerVariant}></Spinner>
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
      <div id="Sync" className="container-fluid">
        {this.renderTable()}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const themeBorder: string = _.get(state, 'theme.border', '');
  const themeTextColor: string = _.get(state, 'theme.textColor', '');
  const themeSpinnerVariant: string = _.get(state, 'theme.spinnerVariant', '');
  const themeRevertSpinnerVariant: string = _.get(state, 'theme.revertSpinnerVariant', '');
  const themePrimaryBackgroundColor: string = _.get(state, 'theme.primaryBackgroundColor', '');
  const themeButtonVariant: string = _.get(state, 'theme.buttonVariant', '');
  return {
    themeBorder,
    themeTextColor,
    themeSpinnerVariant,
    themeRevertSpinnerVariant,
    themePrimaryBackgroundColor,
    themeButtonVariant
  };
};

export default connect(mapStateToProps)(Sync);
