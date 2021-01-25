import React, { Component } from 'react';
import { connect } from 'react-redux';

import { apis } from '../../../../services';
import { Table, NavPills } from '../../../../components';

interface IPrefixesProps {}

interface IPrefixesState {
  prefixes: Array<any>;
  loading: boolean;
}

class Prefixes extends Component<IPrefixesProps, IPrefixesState> {
  constructor(props: IPrefixesProps) {
    super(props);

    this.state = { prefixes: [], loading: true };

    this.getPrefixes = this.getPrefixes.bind(this);
  }

  async componentDidMount() {
    await this.getPrefixes();
  }

  async getPrefixes() {
    await this.setState({ loading: true });
    const prefixes = await apis.getPhonesPrefixes();
    await this.setState({ prefixes, loading: false });
  }

  render() {
    const { prefixes = [], loading = true } = this.state;
    const rowConfigs = [
      { header: 'Prefix', key: 'prefix' },
      { header: 'Provider', key: 'provider' },
      { header: 'Provider ID', key: 'provider_id' }
    ];
    return (
      <div id="Prefixes" className="container-fluid">
        <NavPills group={'phones'}></NavPills>
        <Table
          loading={loading}
          caption={'Phone Prefixes'}
          rows={prefixes}
          rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Prefixes);
