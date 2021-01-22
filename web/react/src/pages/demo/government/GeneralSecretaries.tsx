import React, { Component } from 'react';
import { connect } from 'react-redux';

import { apis } from '../../../services';
import { Table, NavPills } from '../../../components';

interface IGeneralSecretariesProps {}

interface IGeneralSecretariesState {
  generalSecretaries: Array<any>;
  loading: boolean;
}

class GeneralSecretaries extends Component<IGeneralSecretariesProps, IGeneralSecretariesState> {
  constructor(props: IGeneralSecretariesProps) {
    super(props);

    this.state = { generalSecretaries: [], loading: true };

    this.getGeneralSecretaries = this.getGeneralSecretaries.bind(this);
  }

  async componentDidMount() {
    await this.getGeneralSecretaries();
  }

  async getGeneralSecretaries() {
    this.setState({ loading: true });
    const generalSecretaries = await apis.getGeneralSecretaries();
    this.setState({ generalSecretaries, loading: false });
  }

  render() {
    const { generalSecretaries = [], loading = false } = this.state;
    const rowConfigs = [
      { header: 'Name', key: 'name' },
      { header: 'Start', key: 'start_date' },
      { header: 'End', key: 'end_date' }
    ];
    return (
      <div id="GeneralSecretaries" className="container-fluid">
        <NavPills group={'government'}></NavPills>
        <Table
          loading={loading}
          caption={'General Secretaries'}
          rows={generalSecretaries}
          rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(GeneralSecretaries);
