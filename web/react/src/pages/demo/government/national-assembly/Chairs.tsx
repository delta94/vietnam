import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { apis } from '../../../../services';
import { Table } from '../../../../components';

interface IGovernmentNationalAssemblyChairsProps {}

interface IGovernmentNationalAssemblyChairsState {
  loading: boolean;
  chairs: Array<any>;
}

export default class GovernmentNationalAssemblyChairs extends Component<
  IGovernmentNationalAssemblyChairsProps,
  IGovernmentNationalAssemblyChairsState
> {
  constructor(props: IGovernmentNationalAssemblyChairsProps) {
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
      <div id="GovernmentNationalAssemblyChairs" className="container-fluid">
        <Card>
          <Card.Body>
            <Table
              loading={loading}
              caption={'National Assembly Chairs'}
              rows={chairs}
              rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
