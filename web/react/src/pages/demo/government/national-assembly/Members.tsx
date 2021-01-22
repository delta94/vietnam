import React, { Component } from 'react';
import { connect } from 'react-redux';

import { apis } from '../../../../services';
import { Table, NavPills } from '../../../../components';

interface IMembersProps {}

interface IMembersState {
  loading: boolean;
  members: Array<any>;
  no: number;
}

class Members extends Component<IMembersProps, IMembersState> {
  constructor(props: IMembersProps) {
    super(props);

    this.state = { members: [], no: 14, loading: true };

    this.getNationalAssemblyMembers = this.getNationalAssemblyMembers.bind(this);
  }

  async componentDidMount() {
    await this.getNationalAssemblyMembers();
  }

  async getNationalAssemblyMembers() {
    const { no } = this.state;
    this.setState({ loading: true });
    const members = await apis.getNationalAssemblyMembers(no);
    this.setState({ members, loading: false });
  }

  render() {
    const { members = [], loading = false } = this.state;
    const rowConfigs = [{ header: 'Name', key: 'name' }];
    return (
      <div id="Members" className="container-fluid">
        <NavPills group={'government'}></NavPills>
        <Table loading={loading} caption={'Members'} rows={members} rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Members);
