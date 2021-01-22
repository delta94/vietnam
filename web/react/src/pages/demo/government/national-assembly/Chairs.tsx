import React, { Component } from 'react';
import { connect } from 'react-redux';

import { apis } from '../../../../services';
import { Table, NavPills } from '../../../../components';

interface IChairsProps {}

interface IChairsState {
  loading: boolean;
  chairs: Array<any>;
}

class Chairs extends Component<IChairsProps, IChairsState> {
  constructor(props: IChairsProps) {
    super(props);

    this.state = { chairs: [], loading: true };

    this.getNationalAssemblyChairs = this.getNationalAssemblyChairs.bind(this);
  }

  async componentDidMount() {
    await this.getNationalAssemblyChairs();
  }

  async getNationalAssemblyChairs() {
    this.setState({ loading: true });
    const chairs = await apis.getNationalAssemblyChairs();
    this.setState({ chairs, loading: false });
  }

  render() {
    const { chairs = [], loading = false } = this.state;
    const rowConfigs = [
      { header: 'Name', key: 'name' },
      { header: 'Start', key: 'start_date' },
      { header: 'End', key: 'end_date' }
    ];
    return (
      <div id="Chairs" className="container-fluid">
        <NavPills group={'government'}></NavPills>
        <Table
          loading={loading}
          caption={'National Assembly Chairs'}
          rows={chairs}
          rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Chairs);
