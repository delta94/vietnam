import React, { Component } from 'react';
import { connect } from 'react-redux';

import { apis } from '../../../../services';
import { Table, NavPills } from '../../../../components';

interface IPresidentsProps {}

interface IPresidentsState {
  presidents: Array<any>;
  loading: boolean;
}

class Presidents extends Component<IPresidentsProps, IPresidentsState> {
  constructor(props: IPresidentsProps) {
    super(props);

    this.state = { presidents: [], loading: true };

    this.getPresidents = this.getPresidents.bind(this);
  }

  async componentDidMount() {
    await this.getPresidents();
  }

  async getPresidents() {
    this.setState({ loading: true });
    const presidents = await apis.getPresidents();
    this.setState({ presidents, loading: false });
  }

  render() {
    const { presidents = [], loading = false } = this.state;
    const rowConfigs = [
      { header: 'Name', key: 'name' },
      { header: 'Start', key: 'start_date' },
      { header: 'End', key: 'end_date' }
    ];
    return (
      <div id="Presidents" className="container-fluid">
        <NavPills group={'government'}></NavPills>
        <Table
          loading={loading}
          caption={'Presidents'}
          rows={presidents}
          rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Presidents);
