import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { apis } from '../../../services';
import { Table } from '../../../components';

interface IGovernmentPresidentsProps {}

interface IGovernmentPresidentsState {
  presidents: Array<any>;
  loading: boolean;
}

export default class GovernmentPresidents extends Component<
  IGovernmentPresidentsProps,
  IGovernmentPresidentsState
> {
  constructor(props: IGovernmentPresidentsProps) {
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
      <div id="GovernmentPresidents" className="container">
        <Card className="shadow mt-3 mb-5">
          <Card.Body>
            <Table
              loading={loading}
              caption={'Presidents'}
              rows={presidents}
              rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
