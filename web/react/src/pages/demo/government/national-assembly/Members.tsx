import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { apis } from '../../../../services';
import { Table } from '../../../../components';

interface IGovernmentNationalAssemblyMembersProps {}

interface IGovernmentNationalAssemblyMembersState {
  loading: boolean;
  members: Array<any>;
  no: number;
}
export default class GovernmentNationalAssemblyMembers extends Component<
  IGovernmentNationalAssemblyMembersProps,
  IGovernmentNationalAssemblyMembersState
> {
  constructor(props: IGovernmentNationalAssemblyMembersProps) {
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
      <div id="GovernmentNationalAssemblyMembers" className="container-fluid">
        <Card>
          <Card.Body>
            <Table
              loading={loading}
              caption={'Members'}
              rows={members}
              rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
