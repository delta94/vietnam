import React, { Component } from 'react';
import { connect } from 'react-redux';

import { apis } from '../../../services';
import { Table, NavPills } from '../../../components';

interface IPrimeMinistersProps {}

interface IPrimeMinistersState {
  primeMinisters: Array<any>;
  loading: boolean;
}

class PrimeMinisters extends Component<IPrimeMinistersProps, IPrimeMinistersState> {
  constructor(props: IPrimeMinistersProps) {
    super(props);

    this.state = { primeMinisters: [], loading: true };

    this.getPrimeMinisters = this.getPrimeMinisters.bind(this);
  }

  async componentDidMount() {
    await this.getPrimeMinisters();
  }

  async getPrimeMinisters() {
    this.setState({ loading: true });
    const primeMinisters = await apis.getPrimeMinisters();
    this.setState({ primeMinisters, loading: false });
  }

  render() {
    const { primeMinisters = [], loading = false } = this.state;
    const rowConfigs = [
      { header: 'Name', key: 'name' },
      { header: 'Start', key: 'start_date' },
      { header: 'End', key: 'end_date' }
    ];
    return (
      <div id="PrimeMinisters" className="container-fluid">
        <NavPills group={'government'}></NavPills>
        <Table
          loading={loading}
          caption={'Prime Ministers'}
          rows={primeMinisters}
          rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(PrimeMinisters);
